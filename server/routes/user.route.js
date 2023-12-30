const express = require("express");
const {
  create,
  signIn,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  searchUser,
  searchCountries,
  searchCity,
  uploadAvatar,
  editProfile,
  addExperience,
  addEducation,
} = require("../controllers/user.controller");
const { uploadImage } = require("../middlewares/multer");
const {
  userValidator,
  validate,
  signInValidator,
  validatePassword,
} = require("../middlewares/validators");
const { isAuth } = require("../middlewares/auth");
const { isValidPasswordResetToken } = require("../middlewares/user.middleware");
const router = express.Router();

router.post("/create", userValidator, validate, create);
router.post("/sign-in", signInValidator, validate, signIn);
router.post(
  "/upload-avatar",
  isAuth,
  uploadImage.single("avatar"),
  uploadAvatar
);
router.post("/verify-email", verifyEmail);
router.post("/resend-email-verification-token", resendEmailVerificationToken);
router.post("/forget-password", forgetPassword);
router.post(
  "/verify-pass-reset-token",
  isValidPasswordResetToken,
  sendResetPasswordTokenStatus
);
router.post(
  "/reset-password",
  validatePassword,
  validate,
  isValidPasswordResetToken,
  resetPassword
);
router.post("/edit-profile", isAuth, editProfile);
router.post("/add-experience", isAuth, addExperience);
router.post("/add-education", isAuth, addEducation);
router.get("/search", searchUser);
router.get("/is-auth", isAuth, (req, res) => {
  const { user } = req;
  res.json({
    user: {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      avatar: user.avatar,
      email: user.email,
      country: user.country,
      city: user.city,
      initialEducation: user.initialEducation,
      initialExperience: user.initialExperience,
      educations: user.educations,
      experiences: user.experiences,
      isVerified: user.isVerified,
    },
  });
});

router.post("/search-country", searchCountries);
router.post("/search-city", searchCity);

module.exports = router;
