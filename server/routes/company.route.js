const express = require("express");
const {
  createCompany,
  searchCompany,
  getSingleCompany,
} = require("../controllers/company.controller");
const { uploadImage } = require("../middlewares/multer");
const router = express.Router();

router.post("/create", uploadImage.single("avatar"), createCompany);
router.get("/search", searchCompany);
router.post("/single-company", getSingleCompany);

module.exports = router;
