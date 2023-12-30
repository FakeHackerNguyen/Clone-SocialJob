const express = require("express");
const { getSingleCompany } = require("../controllers/company.controller");
const {
  createUniversity,
  searchUniversity,
  getSingleUniversity,
} = require("../controllers/university.controller");
const { uploadImage } = require("../middlewares/multer");

const router = express.Router();

router.post("/create", uploadImage.single("avatar"), createUniversity);
router.get("/search", searchUniversity);
router.post("/single-university", getSingleUniversity);
module.exports = router;
