const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    video: {
      type: Object,
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },

    image: {
      type: Object,
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },

    content: {
      type: String,
      required: true,
    },

    saveBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    hidden: {
      type: Boolean,
      default: false,
    },
    reportBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
