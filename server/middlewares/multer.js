const multer = require("multer");
const storage = multer.diskStorage({});
const storageForFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    cb("Supported only image files!", false);
  }
  cb(null, true);
};

const videoFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("video")) {
    cb("Supported only video files!", false);
  }
  cb(null, true);
};

const pdfFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("application/pdf")) {
    cb("Supported only pdf files!", false);
  }
  cb(null, true);
};

exports.uploadImage = multer({ storage, fileFilter: imageFileFilter });
exports.uploadVideo = multer({ storage, fileFilter: videoFileFilter });
exports.uploadPDF = multer({
  storage: storageForFile,
  fileFilter: pdfFileFilter,
});
