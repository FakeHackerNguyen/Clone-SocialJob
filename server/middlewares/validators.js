const { check, validationResult } = require("express-validator");
const { isValidObjectId } = require("mongoose");

exports.userValidator = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("firstName is missing!"),
  check("lastName").trim().not().isEmpty().withMessage("lastName is missing!"),
  // check("country").trim().not().isEmpty().withMessage("Country is missing!"),
  // check("city").trim().not().isEmpty().withMessage("City is missing!"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long!"),
];

exports.validatePassword = [
  check("newPassword")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long!"),
];

exports.signInValidator = [
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("password").trim().not().isEmpty().withMessage("Password is missing!"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};
