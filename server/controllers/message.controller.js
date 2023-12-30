const { isValidObjectId } = require("mongoose");
const Chat = require("../models/chat.model");
const Message = require("../models/message.model");
const User = require("../models/user.model");
const { sendError } = require("../utils/helper");

exports.sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!isValidObjectId(chatId)) return sendError(res, "Invalid chat!");

  if (!content) return sendError(res, "Content is not missing");

  let newMessage = new Message({
    sender: req.user._id,
    content,
    chat: chatId,
  });

  await newMessage.save();

  newMessage = await Chat.populate(newMessage, "chat");
  newMessage = await User.populate(newMessage, {
    path: "sender",
  });

  // update latest message of chat
  const chat = await Chat.findById(chatId);
  if (!chat) sendError(res, "Chat not found");

  chat.latestMessage = newMessage;
  chat.save();

  res.json({ newMessage });
};

exports.getAllMessages = async (req, res) => {
  const { chatId } = req.params;

  if (!isValidObjectId(chatId)) return sendError(res, "Invalid chat!");

  const messages = await Message.find({ chat: chatId })
    .populate("sender", "lastName email avatar")
    .populate("chat");

  res.json(messages);
};
