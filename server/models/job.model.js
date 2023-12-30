const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    workplaceType: {
      type: String,
      enum: ["On-site", "Hybrid", "Remote"],
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Internship"],
    },
    description: {
      type: String,
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reportBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
