const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
  },
  degree: {
    type: String,
    default: "",
  },
  fieldOfStudy: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Education", educationSchema);
