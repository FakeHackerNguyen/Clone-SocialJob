const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  avatar: {
    type: Object,
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  name: {
    type: String,
    required: true,
  },

  typeOfBusiness: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
