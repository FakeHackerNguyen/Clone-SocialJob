const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("mongoose");
const { generateOTP, sendMail } = require("../utils/mail");
const { sendError, generateRandomByte } = require("../utils/helper");
const cloudinary = require("../config/cloud");

const User = require("../models/user.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const Company = require("../models/company.model");
const University = require("../models/university.model");
const EmailVerificationToken = require("../models/emailVerificationToken.model");
const PasswordResetToken = require("../models/passwordResetToken.model");

exports.create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    country,
    city,
    titleJob,
    typeEmployment,
    typeLocation,
    description,
    companyId,
    universityId,
    startYear,
    endYear,
  } = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser) return sendError(res, "This email is already in use!");

  let newEducation = null;
  let newExperience = null;

  if (universityId && startYear && endYear) {
    newEducation = new Education({
      university: universityId,
      startDate: new Date(`01-01-${startYear}`),
      endDate: new Date(`01-01-${endYear}`),
    });
    newEducation.save();
  }

  if (titleJob && typeEmployment && companyId) {
    newExperience = new Experience({
      titleJob,
      typeEmployment,
      typeLocation,
      description,
      company: companyId,
    });
    newExperience.save();
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    country,
    city,
    initialEducation: newEducation?._id,
    initialExperience: newExperience?._id,
  });

  if (newEducation) newUser.educations.push(newEducation?._id);
  if (newExperience) newUser.experiences.push(newExperience?._id);
  newUser.fullName = `${newUser.firstName} ${newUser.lastName}`;

  await newUser.save();

  let OTP = generateOTP();
  console.log("OTP: ", OTP);

  // send that otp to our user
  // sendMail(
  //   res,
  //   newUser.email,
  //   "Email Verification",
  //   `
  //   <p>You verification OTP</p>
  //   <h1>${OTP}</h1>`
  // );

  const newEmailVerificationToken = new EmailVerificationToken({
    owner: newUser._id,
    token: OTP,
  });

  await newEmailVerificationToken.save();

  res.status(201).json({
    user: {
      _id: newUser._id,
      email: newUser.email,
    },
    message: "Create account successfully",
  });
};

exports.verifyEmail = async (req, res) => {
  const { userId, OTP } = req.body;

  if (!isValidObjectId(userId)) return sendError(res, "Invalid user!");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "User not found!", 404);

  if (user.isVerified) return sendError(res, "user is already verified!");

  const token = await EmailVerificationToken.findOne({ owner: userId });
  if (!token) return sendError(res, "Token not found!");

  const isMatched = await token.compareToken(OTP);
  if (!isMatched) return sendError(res, "Please submit a valid OTP!");

  user.isVerified = true;
  await user.save();

  await EmailVerificationToken.findByIdAndDelete(token._id);

  // sendMail(
  //   res,
  //   user.email,
  //   "Welcome Email",
  //   "<h1>Welcome to our app and thanks for choosing us.</h1>"
  // );

  const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: jwtToken,
      isVerified: user.isVerified,
    },
    message: "Your email is verified.",
  });
};

exports.resendEmailVerificationToken = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return sendError(res, "User not found!");

  if (user.isVerified)
    return sendError(res, "This email id is already verified!");

  const alreadyHasToken = await EmailVerificationToken.findOne({
    owner: userId,
  });
  if (alreadyHasToken)
    return sendError(
      res,
      "Only after one hour you can request for another token!"
    );

  let OTP = generateOTP();
  console.log("OTP: ", OTP);

  // send that otp to our user
  // sendMail(
  //   res,
  //   newUser.email,
  //   "Email Verification",
  //   `
  //   <p>You verification OTP</p>
  //   <h1>${OTP}</h1>`
  // );

  // store otp inside our db
  const newEmailVerificationToken = new EmailVerificationToken({
    owner: user._id,
    token: OTP,
  });

  await newEmailVerificationToken.save();

  res.json({
    message: "New OTP has been sent to your registered email account.",
  });
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) return sendError(res, "Email is missing!");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not found!", 404);

  const alreadyHasToken = await PasswordResetToken.findOne({ owner: user._id });
  if (alreadyHasToken)
    return sendError(
      res,
      "Only after one hour you can request for another token!"
    );

  const token = await generateRandomByte();
  const newPasswordResetToken = await PasswordResetToken({
    owner: user._id,
    token,
  });
  await newPasswordResetToken.save();

  const resetPasswordUrl = `http://localhost:5173/auth/reset-password?token=${token}&id=${user._id}`;

  // sendMail(
  //   res,
  //   user.email,
  //   "Reset Password Link",
  //   `
  //   <p>Click here to reset password</p>
  //   <a href='${resetPasswordUrl}'>Change Password</a>`
  // );

  console.log(resetPasswordUrl);

  res.json({ message: "Link sent to your email!" });
};

exports.sendResetPasswordTokenStatus = (req, res) => {
  res.json({ valid: true });
};

exports.resetPassword = async (req, res) => {
  const { newPassword, userId } = req.body;

  const user = await User.findById(userId);
  const matched = await user.comparePassword(newPassword);
  if (matched)
    return sendError(
      res,
      "The new password must be different from the old one!"
    );

  user.password = newPassword;
  await user.save();

  await PasswordResetToken.findByIdAndDelete(req.resetToken._id);

  // sendMail(
  //   res,
  //   user.email,
  //   "Password Reset Successfully",
  //   `
  //   <h1>Password Reset Successfully</h1>
  //   <p>Now you can use new password.</p>`
  // );

  res.json({
    message: "Password reset successfully, now you can use new password.",
  });
};

exports.uploadAvatar = async (req, res) => {
  const { file } = req;

  const user = await User.findById(req.user._id);
  if (!user) return sendError(res, "User not found", 404);

  if (file) {
    const avatarId = user.avatar?.public_id;
    // console.log(posterID);
    if (avatarId) {
      const { result } = await cloudinary.uploader.destroy(avatarId);
      if (result !== "ok") {
        return sendError(res, "Could not update avatar at the moment!");
      }

      const {
        secure_url: url,
        public_id,
        responsive_breakpoints,
      } = await cloudinary.uploader.upload(file.path, {
        transformation: {
          width: 1280,
          height: 720,
        },
        responsive_breakpoints: {
          create_derived: true,
          max_width: 640,
          max_images: 3,
        },
      });

      const finalImage = { url, public_id, responsive: [] };

      const { breakpoints } = responsive_breakpoints[0];
      if (breakpoints) {
        for (let imgObj of breakpoints) {
          const { secure_url } = imgObj;
          finalImage.responsive.push(secure_url);
        }
      }
      user.avatar = finalImage;
    }
  }

  user.save();

  res.json({ message: "Upload Avatar successfully" });
};

exports.editProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    currentEducation,
    currentExperience,
    city,
    country,
  } = req.body;

  const user = await User.findById(req.user._id);
  if (!user) return sendError(res, "User not found", 404);

  user.firstName = firstName;
  user.lastName = lastName;
  user.fullName = `${firstName} ${lastName}`;
  user.city = city;
  user.country = country;

  if (currentEducation?.trim()) user.initialEducation = currentEducation;
  if (currentExperience?.trim()) user.initialExperience = currentExperience;

  user.save();

  res.json({ message: "Update profile successfully" });
};

exports.addEducation = async (req, res) => {
  const {
    universityId,
    startYear,
    endYear,
    startMonth,
    endMonth,
    degree,
    fieldOfStudy,
    description,
  } = req.body;

  if (!isValidObjectId(universityId))
    return sendError(res, "Invalid University Id");

  const user = await User.findById(req.user._id);
  if (!user) return sendError(res, "User not found", 404);

  const newEducation = new Education({
    university: universityId,
    startDate: new Date(`${startYear}-${startMonth.padStart(2, "0")}-01`),
    endDate: new Date(`${endYear}-${endMonth.padStart(2, "0")}-01`),
    degree,
    fieldOfStudy,
    description,
  });

  newEducation.save();
  if (user.educations.length === 0) user.initialEducation = newEducation._id;

  user.educations.push(newEducation._id);
  user.save();

  res.json({ message: "Add education successfully" });
};
exports.addExperience = async (req, res) => {
  const {
    companyId,
    titleJob,
    typeEmployment,
    typeLocation,
    description,
    startMonth,
    endMonth,
    startYear,
    endYear,
  } = req.body;

  if (!isValidObjectId(companyId)) return sendError(res, "Invalid Company Id");

  const user = await User.findById(req.user._id);
  if (!user) return sendError(res, "User not found", 404);

  const newExperience = new Experience({
    company: companyId,
    titleJob,
    typeEmployment,
    typeLocation,
    description,
    startDate: new Date(`${startYear}-${startMonth.padStart(2, "0")}-01`),
    endDate: new Date(`${endYear}-${endMonth.padStart(2, "0")}-01`),
  });

  newExperience.save();

  if (user.experiences.length === 0) user.initialExperience = newExperience._id;

  user.experiences.push(newExperience._id);
  user.save();

  res.json({ message: "Add education successfully" });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email })
    .populate("initialEducation")
    .populate("initialExperience")
    .populate("educations")
    .populate("experiences");

  if (!user) return sendError(res, "Email not found");

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

  const matched = await user.comparePassword(password);
  if (!matched) return sendError(res, "Email/Password is wrong!");

  const {
    _id,
    firstName,
    lastName,
    fullName,
    avatar,
    country,
    city,
    initialEducation,
    initialExperience,
    educations,
    experiences,
    isVerified,
  } = user;

  const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

  res.json({
    user: {
      _id,
      firstName,
      lastName,
      fullName,
      avatar,
      email,
      country,
      city,
      initialEducation,
      initialExperience,
      educations,
      experiences,
      token: jwtToken,
      isVerified,
    },
  });
};

exports.searchUser = async (req, res) => {
  const { name } = req.query;
  if (!name.trim()) return sendError(res, "Invalid request!");

  let result = await User.find({
    fullName: { $regex: name, $options: "i" },
  })
    .populate("initialEducation")
    .populate("initialExperience")
    .populate("educations")
    .populate("experiences");

  result = await University.populate(result, {
    path: "initialEducation.university",
  });

  result = await Company.populate(result, {
    path: "initialExperience.company",
  });

  result = await Company.populate(result, {
    path: "experiences.company",
  });

  result = await University.populate(result, {
    path: "educations.university",
  });

  const users = result.map((user) => {
    return {
      _id: user._id,
      fullName: user.fullName,
      avatar: user.avatar,
      country: user.country,
      city: user.city,
      university: user.university,
      company: user.company,
      titleJob: user.titleJob,
      initialEducation: user.initialEducation,
      initialExperience: user.initialExperience,
      educations: user.educations,
      experiences: user.experiences,
    };
  });
  res.json({ results: users });
};

exports.searchCountries = async (req, res) => {
  const { name } = req.body;
  if (!name.trim()) return sendError(res, "Invalid request!");

  const response = await fetch(
    `https://countriesnow.space/api/v0.1/countries/iso`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let results = await response.json();

  results = results.data.filter(
    (result) =>
      result.name.toUpperCase().includes(name.toUpperCase()) ||
      result.name.toLowerCase().includes(name.toLowerCase())
  );

  console.log(results);
  res.json({ results });
};

exports.searchCity = async (req, res) => {
  const { name, country } = req.body;
  if (!name.trim()) return sendError(res, "Invalid request!");

  const response = await fetch(
    `https://countriesnow.space/api/v0.1/countries/cities`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
    }
  );

  let results = await response.json();
  results = results.data.filter(
    (result) =>
      result.toUpperCase().includes(name.toUpperCase()) ||
      result.toLowerCase().includes(name.toLowerCase())
  );
  res.json({ results });
};
