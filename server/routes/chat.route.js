const express = require("express");
const { accessChat, getChats } = require("../controllers/chat.controller");
const { isAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/access-chat", isAuth, accessChat);
router.get("/get-chats", isAuth, getChats);
router.post("/create-group");
router.put("/delete-group");
router.put("/remove-user-from-group");

module.exports = router;
