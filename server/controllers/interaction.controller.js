const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");

const Post = require("../models/post.model");
const Comment = require("../models/comment.model");
const React = require("../models/react.model");
const Reply = require("../models/reply.model");
const User = require("../models/user.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const Company = require("../models/company.model");
const University = require("../models/university.model");

exports.commentPost = async (req, res) => {
  const { postId, content } = req.body;
  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

  const post = await Post.findById(postId);
  if (!post) return sendError(res, "Post not found", 404);

  const newComment = new Comment({
    post: post._id,
    content,
    owner: req.user._id,
  });

  newComment.save();

  res.json({ message: "Comment is done" });
};

exports.like = async (req, res) => {
  const { postId, like, commentId } = req.body;
  if (postId) {
    if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

    const post = await Post.findById(postId);
    if (!post) return sendError(res, "Post not found", 404);

    const newLike = new React({
      post: post._id,
      like,
      owner: req.user._id,
    });

    newLike.save();
  }

  if (commentId) {
    if (!isValidObjectId(commentId)) return sendError(res, "Invalid Post Id");
    const comment = await Comment.findById(commentId);
    if (!comment) return sendError(res, "Comment not found", 404);

    const newLike = new React({
      comment: comment._id,
      like,
      owner: req.user._id,
    });

    newLike.save();
  }

  res.json({ message: "Like is done" });
};

exports.removeLike = async (req, res) => {
  const { postId, commentId } = req.body;
  if (postId) {
    if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

    const post = await Post.findById(postId);
    if (!post) return sendError(res, "Post not found", 404);

    await React.findOneAndDelete({
      post: post._id,
      like: true,
      owner: req.user._id,
    });
  }

  if (commentId) {
    if (!isValidObjectId(commentId)) return sendError(res, "Invalid Post Id");
    const comment = await Comment.findById(commentId);
    if (!comment) return sendError(res, "Comment not found", 404);

    await React.findOneAndDelete({
      comment: comment._id,
      like: true,
      owner: req.user._id,
    });
  }

  res.json({ message: "Remove like is done" });
};

exports.replyComment = async (req, res) => {
  const { commentId, content } = req.body;

  if (!isValidObjectId(commentId)) return sendError(res, "Invalid Post Id");
  const comment = await Comment.findById(commentId).populate(
    "owner",
    "-password"
  );
  if (!comment) return sendError(res, "Comment not found", 404);

  const newReply = new Reply({
    comment: comment._id,
    content,
    owner: req.user._id,
  });

  newReply.save();

  res.json({ message: "Reply is done" });
};
exports.getComments = async (req, res) => {
  const { postId } = req.body;
  if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

  let comments = await Comment.find({
    post: postId,
  }).populate("owner", "-password");

  comments = await Education.populate(comments, {
    path: "owner.initialEducation",
  });

  comments = await Experience.populate(comments, {
    path: "owner.initialExperience",
  });

  comments = await Company.populate(comments, {
    path: "owner.initialExperience.company",
  });

  comments = await University.populate(comments, {
    path: "owner.initialEducation.university",
  });

  res.json({ comments });
};
exports.getLikes = async (req, res) => {
  const { postId, commentId } = req.body;
  if (postId) {
    if (!isValidObjectId(postId)) return sendError(res, "Invalid Post Id");

    const post = await Post.findById(postId);
    if (!post) return sendError(res, "Post not found", 404);

    const likes = await React.find({
      post: post._id,
      like: true,
    }).populate("owner", "-password");

    res.json({ amountLike: likes.length, likes });
  }

  if (commentId) {
    if (!isValidObjectId(commentId)) return sendError(res, "Invalid Post Id");
    const comment = await Comment.findById(commentId);
    if (!comment) return sendError(res, "Comment not found", 404);

    const likes = await React.find({
      comment: comment._id,
      like: true,
    }).populate("owner", "-password");

    res.json({ amountLike: likes.length, likes });
  }
};
exports.getReplies = async (req, res) => {
  const { commentId } = req.body;
  if (!isValidObjectId(commentId)) return sendError(res, "Invalid Post Id");

  const comment = await Comment.findById(commentId);
  if (!comment) return sendError(res, "Comment not found", 404);

  let replies = await Reply.find({
    comment: comment._id,
  })
    .populate("owner", "-password")
    .populate("comment");

  replies = await User.populate(replies, {
    path: "comment.owner",
  });

  res.json({ replies });
};

exports.likedComment = async (req, res) => {
  const { commentId } = req.body;
  if (!isValidObjectId(commentId)) return sendError(res, "Invalid Comment Id");

  const likedComment = await React.findOne({
    comment: commentId,
    like: true,
    owner: req.user._id,
  });

  if (!likedComment) return res.json({ like: false });

  res.json(likedComment);
};
