const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
  titleJob: {
    type: String,
    default: "",
  },
  typeEmployment: {
    type: String,
    enum: ["Full-time", "Part-time", "Internship"],
  },
  typeLocation: {
    type: String,
    enum: ["On-site", "Hybrid", "Remote"],
  },
  description: {
    type: String,
    default: "",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
