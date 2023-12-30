const express = require("express");
const {
  uploadVideoPost,
  updatePostPersonalWithoutImage,
  updatePostPersonal,
  removePostPersonal,
  getPostOfConnections,
  likedPost,
  reportPost,
  createPostPersonalWithVideo,
  createPostPersonalWithImage,
} = require("../controllers/post.controller");
const { uploadVideo, uploadImage } = require("../middlewares/multer");
const { isAuth } = require("../middlewares/auth");
const { parseData } = require("../utils/helper");
const router = express.Router();

// router.post(
//   "/upload-video",
//   isAuth,
//   uploadVideo.single("video"),
//   uploadVideoPost
// );

router.post(
  "/create-with-image",
  isAuth,
  uploadImage.single("image"),
  createPostPersonalWithImage
);

router.post(
  "/create-with-video",
  isAuth,
  uploadVideo.single("video"),
  createPostPersonalWithVideo
);

router.patch(
  "/update-post-without-file/:postId",
  isAuth,
  updatePostPersonalWithoutImage
);

router.patch(
  "/update/:postId",
  isAuth,
  uploadImage.single("image"),
  parseData,
  updatePostPersonal
);
router.delete("/:postId", isAuth, removePostPersonal);
router.get("/posts", isAuth, getPostOfConnections);
router.post("/liked-post", isAuth, likedPost);
router.post("/report-post", isAuth, reportPost);

module.exports = router;
