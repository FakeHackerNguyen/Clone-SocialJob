const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/helper");
const User = require("../models/user.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const Company = require("../models/company.model");
const University = require("../models/university.model");

exports.isAuth = async (req, res, next) => {
  const token = req.headers?.authorization;

  if (!token) return sendError(res, "Invalid token!");
  const jwtToken = token.split("Bearer ")[1];

  if (!jwtToken) return sendError(res, "Invalid token!");
  const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
  const { userId } = decode;

  let user = await User.findById(userId)
    .populate("initialEducation")
    .populate("initialExperience")
    .populate("educations")
    .populate("experiences")
  if (!user) return sendError(res, "unauthorized access!");

  user = await University.populate(user, {
    path: "initialEducation.university",
  });

  user = await Company.populate(user, {
    path: "initialExperience.company",
  });

  user = await Company.populate(user, {
    path: "experiences.company",
  });

  user = await University.populate(user, {
    path: "educations.university",
  });

  req.user = user;

  next();
};
