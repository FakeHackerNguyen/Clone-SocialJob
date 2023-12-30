const Job = require("../models/job.model");
const User = require("../models/user.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");
const { sendMail, sendMailWithFile } = require("../utils/mail");
const fs = require("fs");

exports.createJob = async (req, res) => {
  const {
    jobTitle,
    companyId,
    workplaceType,
    jobLocation,
    jobType,
    description,
  } = req.body;

  const newJob = new Job({
    writer: req.user._id,
    jobTitle,
    company: companyId,
    workplaceType,
    jobLocation,
    jobType,
    description,
  });

  newJob.save();

  res.json({ message: "Job is created successfully" });
};

exports.searchJob = async (req, res) => {
  const { jobTitle = "", jobLocation = "" } = req.query;

  let result = await Job.find({
    jobTitle: { $regex: jobTitle, $options: "i" },
    jobLocation: { $regex: jobLocation, $options: "i" },
  }).populate("company");

  result = await User.populate(result, {
    path: "writer",
    select:
      "_id fullName avatar email country city initialEducation initialExperience educations experiences",
  });

  result = await Education.populate(result, {
    path: "educations",
  });

  result = await Experience.populate(result, {
    path: "experiences",
  });

  const jobs = result.map((job) => {
    return {
      _id: job._id,
      writer: job.writer,
      jobTitle: job.jobTitle,
      company: job.company,
      workplaceType: job.workplaceType,
      jobLocation: job.jobLocation,
      jobType: job.jobType,
      description: job.description,
      updatedAt: job.updatedAt,
    };
  });
  res.json({ results: jobs });
};

exports.getSingleJob = async (req, res) => {
  const { jobId } = req.body;

  if (!isValidObjectId(jobId)) return sendError(res, "Invalid Job Id");

  const job = await Job.findById(jobId).populate("writer").populate("company");
  if (!job) return sendError(res, "Job not found!");

  res.json({ job });
};

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate("writer").populate("company");

  res.json({ jobs });
};

exports.applyJob = async (req, res) => {
  const { jobId, phone, phoneCountry, email } = req.body;
  const { file } = req;

  if (!isValidObjectId(jobId)) return sendError(res, "Job ID invalid");

  const job = await Job.findById(jobId).populate("writer").populate("company");
  if (!job) return sendError(res, "Job not found", 404);

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not found", 404);

  if (String(job.writer._id) === String(user._id))
    return sendError(res, "You can't apply this job");

  const isApplied = job.applicants.some(
    (applicant) => String(applicant) === String(user._id)
  );

  if (isApplied) return sendError(res, "You applied this job");

  job.applicants.push(user._id);

  job.save();

  const pathToAttachment = `./files/${file.filename}`;
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  sendMailWithFile(
    `${job.writer.email}`,
    `Apply CV for ${job.jobTitle} at ${job.company.name}`,
    `
      <p>Contact Info</p>
      <p>Phone: ${phoneCountry} - ${phone}</p>
      <p>Email: ${email}</p>
    `,
    attachment
  );

  res.json({ message: "Apply Job successfully" });
};

exports.reportJob = async (req, res) => {
  const { jobId } = req.body;
  if (!isValidObjectId(jobId)) return sendError(res, "Job Id invalid");

  const job = await Job.findById(jobId).populate("writer");
  if (!job) return sendError(res, "Job not found");

  if (String(job.writer._id) === String(req.user._id))
    return sendError(res, "You can't report this job");

  if (job.reportBy.length + 1 > 2) {
    await Job.findByIdAndDelete(jobId);
    return res.json({
      message: "This job is report larger than 2, it deleted",
    });
  }

  job.reportBy.push(req.user._id);

  job.save();

  res.json({ message: "Report Job successfully" });
};
