const { isValidObjectId } = require("mongoose");
const cloudinary = require("../config/cloud");

const Post = require("../models/post.model");
const User = require("../models/user.model");
const React = require("../models/react.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const Company = require("../models/company.model");
const University = require("../models/university.model");
const { sendError } = require("../utils/helper");

exports.uploadVideoPost = async (req, res) => {
  const { file } = req;
  if (!file) return sendError(res, "Video file is missing!");

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: "video",
    }
  );
  res.status(201).json({ url, public_id });
};

exports.createPostPersonalWithVideo = async (req, res) => {
  const { file } = req;
  const { content } = req.body;

  const newPost = new Post({
    content,
    owner: req.user._id,
  });

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: "video",
    }
  );

  newPost.video = { url, public_id };
  await newPost.save();

  res.status(201).json({
    post: {
      id: newPost._id,
      content,
    },
  });
};

exports.createPostPersonalWithImage = async (req, res) => {
  const { file } = req;
  const { content } = req.body;

  const newPost = new Post({
    content,
    owner: req.user._id,
  });

  if (file) {
    const {
      secure_url: url,
      public_id,
      responsive_breakpoints,
    } = await cloudinary.uploader.upload(file.path, {
      transformation: {
        width: 1280,
        height: 720,
      },
      responsive_breakpoints: {
        create_derived: true,
        max_width: 640,
        max_images: 3,
      },
    });

    const finalImage = { url, public_id, responsive: [] };

    const { breakpoints } = responsive_breakpoints[0];
    if (breakpoints) {
      for (let imgObj of breakpoints) {
        const { secure_url } = imgObj;
        finalImage.responsive.push(secure_url);
      }
    }
    newPost.image = finalImage;
  }

  await newPost.save();

  res.status(201).json({
    post: {
      id: newPost._id,
      content,
    },
  });
};

exports.updatePostPersonalWithoutImage = async (req, res) => {
  const { postId } = req.params;

  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post ID!");

  const post = await Movie.findById(postId);
  if (!post) return sendError(res, "Post Not Found!", 404);

  const { content, video } = req.body;

  post.content = content;
  post.video = video;

  await post.save();

  res.json({ message: "Post is updated", Post });
};

exports.updatePostPersonal = async (req, res) => {
  const { postId } = req.params;
  const { file } = req;

  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post ID!");

  if (!req.file) return sendError(res, "Image/Video is missing!");

  const post = await Movie.findById(postId);
  if (!post) return sendError(res, "Post Not Found!", 404);

  const { content, video } = req.body;

  post.content = content;
  post.video = video;
  // update image
  if (file) {
    // removing poster from cloud if there is any.
    const imageID = movie.image?.public_id;
    // console.log(posterID);
    if (imageID) {
      const { result } = await cloudinary.uploader.destroy(imageID);
      if (result !== "ok") {
        return sendError(res, "Could not update image at the moment!");
      }

      // uploading poster
      const {
        secure_url: url,
        public_id,
        responsive_breakpoints,
      } = await cloudinary.uploader.upload(req.file.path, {
        transformation: {
          width: 1280,
          height: 720,
        },
        responsive_breakpoints: {
          create_derived: true,
          max_width: 640,
          max_images: 3,
        },
      });

      const finalImage = { url, public_id, responsive: [] };

      const { breakpoints } = responsive_breakpoints[0];
      if (breakpoints.length) {
        for (let imgObj of breakpoints) {
          const { secure_url } = imgObj;
          finalImage.responsive.push(secure_url);
        }
      }

      post.image = finalImage;
    }
  }

  await post.save();

  res.json({
    message: "Post is updated",
    post: {
      id: post._id,
      content: post.content,
      image: post.image?.url,
    },
  });
};

exports.removePostPersonal = async (req, res) => {
  const { postId } = req.params;

  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post ID!");

  const post = await Post.findById(postId);
  if (!post) return sendError(res, "Post Not Found!", 404);

  if (String(post.owner === String(req.user._id))) {
    const imageId = post.image?.public_id;
    if (imageId) {
      const { result } = await cloudinary.uploader.destroy(imageId);
      if (result !== "ok")
        return sendError(res, "Could not remove image from cloud!");
    }

    // removing trailer
    const videoId = post.video?.public_id;
    if (videoId) {
      const { result } = await cloudinary.uploader.destroy(videoId, {
        resource_type: "video",
      });

      if (result !== "ok")
        return sendError(res, "Could not remove video from cloud!");
    }

    await Post.findByIdAndDelete(postId);
  } else {
    post.hidden = true;
    post.save();
  }

  res.json({ message: "Post removed successfully." });
};

exports.getPostOfConnections = async (req, res) => {
  let user = await User.findById(req.user._id).populate("connections");

  user = await User.populate(user, {
    path: "connections.recipient",
  });

  user = await User.populate(user, {
    path: "connections.requester",
  });

  let myPost = await Post.find({ owner: req.user._id }).populate(
    "owner",
    "-password"
  );

  myPost = await Experience.populate(myPost, {
    path: "owner.initialExperience",
  });

  myPost = await Education.populate(myPost, {
    path: "owner.initialEducation",
  });

  myPost = await Company.populate(myPost, {
    path: "owner.initialExperience.company",
  });

  myPost = await University.populate(myPost, {
    path: "owner.initialEducation.university",
  });

  const posts = [];
  posts.push(...myPost);

  for (let c of user.connections) {
    if (c.status === 3) {
      if (String(c.requester._id) === String(req.user._id)) {
        let post = await Post.find({ owner: c.recipient._id }).populate(
          "owner",
          "-password"
        );

        post = await Experience.populate(post, {
          path: "owner.initialExperience",
        });

        post = await Education.populate(post, {
          path: "owner.initialEducation",
        });

        post = await Company.populate(post, {
          path: "owner.initialExperience.company",
        });

        post = await University.populate(post, {
          path: "owner.initialEducation.university",
        });

        posts.push(...post);
      } else {
        let post = await Post.find({ owner: c.requester._id }).populate(
          "owner",
          "-password"
        );

        post = await Experience.populate(post, {
          path: "owner.initialExperience",
        });

        post = await Education.populate(post, {
          path: "owner.initialEducation",
        });

        post = await Company.populate(post, {
          path: "owner.initialExperience.company",
        });

        post = await University.populate(post, {
          path: "owner.initialEducation.university",
        });

        posts.push(...post);
      }
    }
  }

  posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  res.json({ posts });
};

exports.likedPost = async (req, res) => {
  const { postId } = req.body;
  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

  const likedPost = await React.findOne({
    post: postId,
    like: true,
    owner: req.user._id,
  });

  if (!likedPost) return res.json({ like: false });

  res.json(likedPost);
};

exports.reportPost = async (req, res) => {
  const { postId } = req.body;
  if (!isValidObjectId(postId)) return sendError(res, "Post Id invalid");

  const post = await Post.findById(postId).populate("owner");
  if (!post) return sendError(res, "Post not found");

  if (String(post.owner._id) === String(req.user._id))
    return sendError(res, "You can't report this post");

  if (post.reportBy.length + 1 > 2) {
    await Post.findByIdAndDelete(postId);
    return res.json({
      message: "This post is report larger than 2, it deleted",
    });
  }

  post.reportBy.push(req.user._id);

  post.save();

  res.json({ message: "Report Job successfully" });
};
