const University = require("../models/university.model");
const cloudinary = require("../config/cloud");
const { sendError } = require("../utils/helper");
const { isValidObjectId } = require("mongoose");

exports.createUniversity = async (req, res) => {
  const { file } = req;
  const { name, region } = req.body;

  const newUniversity = new University({
    name,
    region,
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
    newUniversity.avatar = finalImage;
  }

  newUniversity.save();

  res.json({ message: "Create university successfully" });
};

exports.searchUniversity = async (req, res) => {
  const { name } = req.query;
  if (!name.trim()) return res.json({ results: [] });

  const result = await University.find({
    name: { $regex: name, $options: "i" },
  });

  const universities = result.map((university) => {
    return {
      _id: university._id,
      name: university.name,
      avatar: university.avatar,
      region: university.region,
    };
  });
  res.json({ results: universities });
};

exports.getSingleUniversity = async (req, res) => {
  const { universityId } = req.body;
  console.log(universityId);
  if (!isValidObjectId(universityId))
    return sendError(res, "Invalid University Id");

  const university = await University.findById(universityId);
  if (!university) return sendError(res, "Company not found", 404);
  res.json({
    data: {
      _id: university._id,
      name: university.name,
      avatar: university.avatar,
      region: university.region,
    },
  });
};
