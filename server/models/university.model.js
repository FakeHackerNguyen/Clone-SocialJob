const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  avatar: {
    type: Object,
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("University", universitySchema);
