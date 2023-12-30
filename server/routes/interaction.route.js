const express = require("express");
const {
  commentPost,
  like,
  replyComment,
  getComments,
  getLikes,
  getReplies,
  removeLike,
  likedComment,
} = require("../controllers/interaction.controller");
const { isAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/comment", isAuth, commentPost);
router.post("/like", isAuth, like);
router.post("/reply", isAuth, replyComment);
router.post("/comments", isAuth, getComments);
router.post("/likes", isAuth, getLikes);
router.post("/replies", isAuth, getReplies);
router.delete("/remove-like", isAuth, removeLike);
router.post("/liked-comment", isAuth, likedComment);

module.exports = router;
