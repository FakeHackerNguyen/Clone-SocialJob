const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");
const Chat = require("../models/chat.model");
const User = require("../models/user.model");

exports.accessChat = async (req, res) => {
  const { userId } = req.body;
  if (!isValidObjectId(userId)) return sendError(res, "Invalid user!");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "User not found!", 404);

  let chat = await Chat.findOne({
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  chat = await User.populate(chat, {
    path: "latestMessage.sender",
  });

  if (chat) {
    res.json(chat);
  } else {
    const newChat = new Chat({
      isGroup: false,
      users: [req.user._id, userId],
      owner: req.user._id,
    });

    await newChat.save();

    let resChat = await Chat.findOne({
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    resChat = await User.populate(resChat, {
      path: "latestMessage.sender",
    });

    res.json({ chat: resChat });
  }
};

exports.getChats = async (req, res) => {
  let chat = await Chat.find({
    users: { $elemMatch: { $eq: req.user._id } },
  })
    .populate("users", "-password")
    .populate("owner", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 });

  chat = await User.populate(chat, {
    path: "latestMessage.sender",
  });

  res.json({ chat });
};
