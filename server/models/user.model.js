const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: Object,
      url: {
        type: String,
        required: true,
      },
      public_id: { type: String, required: true },
      default: {
        url: "https://res.cloudinary.com/dfnxgadl3/image/upload/v1703590741/default_fd3acx.png",
        public_id: "default_fd3acx",
      },
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    initialEducation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
    },
    initialExperience: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Experience",
    },
    educations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education",
      },
    ],
    experiences: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience",
      },
    ],
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Connection",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

module.exports = mongoose.model("User", userSchema);
