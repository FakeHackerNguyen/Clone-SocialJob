const Company = require("../models/company.model");
const cloudinary = require("../config/cloud");
const { sendError } = require("../utils/helper");
const { isValidObjectId } = require("mongoose");

exports.createCompany = async (req, res) => {
  const { file } = req;
  const { name, typeOfBusiness } = req.body;

  const newCompany = new Company({
    name,
    typeOfBusiness,
  });

  if (file) {
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
    newCompany.avatar = finalImage;
  }

  newCompany.save();

  res.json({ message: "Create company successfully" });
};

exports.searchCompany = async (req, res) => {
  const { name } = req.query;
  if (!name.trim()) return res.json({ results: [] });

  const result = await Company.find({
    name: { $regex: name, $options: "i" },
  });

  const companies = result.map((company) => {
    return {
      _id: company._id,
      name: company.name,
      avatar: company.avatar,
      typeOfBusiness: company.typeOfBusiness,
    };
  });
  res.json({ results: companies });
};

exports.getSingleCompany = async (req, res) => {
  const { companyId } = req.body;
  if (!isValidObjectId(companyId)) return sendError(res, "Invalid Company Id");

  const company = await Company.findById(companyId);
  if (!company) return sendError(res, "Company not found", 404);
  res.json({
    data: {
      _id: company._id,
      name: company.name,
      avatar: company.avatar,
      typeOfBusiness: company.typeOfBusiness,
    },
  });
};
