const mongoose = require("mongoose");

const connectionSchema = mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: Number,
      enums: [
        1, // requested
        2, // pending
        3, // friend
      ],
    },
    note: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Connection", connectionSchema);
