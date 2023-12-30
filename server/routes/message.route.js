const express = require("express");
const {
  sendMessage,
  getAllMessages,
} = require("../controllers/message.controller");
const { isAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/send-message", isAuth, sendMessage);
router.get("/get-messages/:chatId", isAuth, getAllMessages);

module.exports = router;
