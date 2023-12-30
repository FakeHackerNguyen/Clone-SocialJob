const express = require("express");
const {
  createJob,
  searchJob,
  applyJob,
  getSingleJob,
  getAllJobs,
  reportJob,
} = require("../controllers/job.controller");
const { isAuth } = require("../middlewares/auth");
const { uploadPDF } = require("../middlewares/multer");
const router = express.Router();

router.post("/single-job", getSingleJob);
router.post("/create", isAuth, createJob);
router.get("/search", searchJob);
router.post("/apply-job", isAuth, uploadPDF.single("pdf"), applyJob);
router.post("/report-job", isAuth, reportJob);
router.get("/jobs", getAllJobs);

module.exports = router;
