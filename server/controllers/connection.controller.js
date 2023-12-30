const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model");
const Connection = require("../models/connection.model");
const Education = require("../models/education.model");
const Experience = require("../models/experience.model");
const Company = require("../models/company.model");
const University = require("../models/university.model");
const { sendError } = require("../utils/helper");

exports.getConnections = async (req, res) => {
  let user = await User.findById(req.user._id).populate("connections");

  user = await User.populate(user, {
    path: "connections.recipient",
  });

  user = await Education.populate(user, {
    path: "connections.recipient.initialEducation",
  });

  user = await Experience.populate(user, {
    path: "connections.recipient.initialExperience",
  });

  user = await Company.populate(user, {
    path: "connections.recipient.initialExperience.company",
  });

  user = await University.populate(user, {
    path: "connections.recipient.initialEducation.university",
  });

  user = await User.populate(user, {
    path: "connections.requester",
  });

  user = await Education.populate(user, {
    path: "connections.requester.initialEducation",
  });

  user = await Experience.populate(user, {
    path: "connections.requester.initialExperience",
  });

  user = await Company.populate(user, {
    path: "connections.requester.initialExperience.company",
  });

  user = await University.populate(user, {
    path: "connections.requester.initialEducation.university",
  });

  let connections = user.connections.filter((c) => c.status === 3);

  connections = connections.map((c) => {
    return {
      _id: c._id,
      avatar:
        String(c.requester._id) === String(req.user._id)
          ? c.recipient.avatar
          : c.requester.avatar,
      name:
        String(c.requester._id) === String(req.user._id)
          ? c.recipient.fullName
          : c.requester.fullName,
      status: c.status,
    };
  });

  res.json({ connections });
};

exports.getPendingConnection = async (req, res) => {
  let user = await User.findById(req.user._id).populate("connections");

  user = await User.populate(user, {
    path: "connections.recipient",
  });

  user = await Education.populate(user, {
    path: "connections.recipient.initialEducation",
  });

  user = await Experience.populate(user, {
    path: "connections.recipient.initialExperience",
  });

  user = await Company.populate(user, {
    path: "connections.recipient.initialExperience.company",
  });

  user = await University.populate(user, {
    path: "connections.recipient.initialEducation.university",
  });

  let connections = user.connections.filter((c) => c.status === 2);

  res.json({ connections });
};

exports.requestConnection = async (req, res) => {
  const { userId, note } = req.body;
  if (!isValidObjectId(userId)) return sendError(res, "Invalid user!");

  const recipientUser = await User.findById(userId);
  if (!recipientUser) return sendError(res, "User not found!", 404);

  const requestConnection = await Connection.findOneAndUpdate(
    {
      requester: req.user._id,
      recipient: userId,
      note,
    },
    { $set: { status: 1 } },
    { upsert: true, new: true }
  );

  const recipientConnection = await Connection.findOneAndUpdate(
    {
      requester: userId,
      recipient: req.user._id,
      note,
    },
    { $set: { status: 2 } },
    { upsert: true, new: true }
  );

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { connections: requestConnection._id } }
  );

  await User.findOneAndUpdate(
    { _id: userId },
    { $push: { connections: recipientConnection._id } }
  );

  res.json({ message: "Request is sent" });
};

exports.responseConnection = async (req, res) => {
  const { connectionId, isAccept } = req.body;
  if (!isValidObjectId(connectionId))
    return sendError(res, "Invalid connection!");

  const recipientConnection = await Connection.findById(connectionId);
  if (!recipientConnection) return sendError(res, "Connection not found", 404);

  const requestConnection = await Connection.findOne({
    requester: recipientConnection.recipient,
    recipient: recipientConnection.requester,
  });
  if (!requestConnection) return sendError(res, "Connection not found", 404);

  if (isAccept) {
    recipientConnection.status = 3;
    requestConnection.status = 3;
    recipientConnection.save();
    requestConnection.save();
  } else {
    const removeRequestConnection = await Connection.findOneAndRemove({
      requester: recipientConnection.recipient,
      recipient: recipientConnection.requester,
    });
    const removeRecipientConnection = await Connection.findOneAndRemove({
      requester: recipientConnection.requester,
      recipient: recipientConnection.recipient,
    });

    await User.findOneAndUpdate(
      { _id: recipientConnection.recipient },
      { $pull: { connections: removeRequestConnection._id } }
    );

    await User.findOneAndUpdate(
      { _id: recipientConnection.requester },
      { $pull: { connections: removeRecipientConnection._id } }
    );
  }

  res.json({ message: "Response connection is done" });
};

exports.removeConnection = async (req, res) => {
  const { connectionId } = req.body;
  if (!isValidObjectId(connectionId))
    return sendError(res, "Invalid connection!");

  const connection = await Connection.findById(connectionId);
  if (!connection) return sendError(res, "Connection not found", 404);

  if (connection.requester === req.user._id) {
    const removeRecipientConnection = await Connection.findOneAndRemove({
      requester: connection.recipient,
      recipient: connection.requester,
    });
    const removeRequestConnection = await Connection.findOneAndRemove({
      requester: connection.requester,
      recipient: connection.recipient,
    });

    await User.findOneAndUpdate(
      { _id: connection.recipient },
      { $pull: { connections: removeRecipientConnection._id } }
    );

    await User.findOneAndUpdate(
      { _id: connection.requester },
      { $pull: { connections: removeRequestConnection._id } }
    );
  } else {
    const removeRequestConnection = await Connection.findOneAndRemove({
      requester: connection.recipient,
      recipient: connection.requester,
    });
    const removeRecipientConnection = await Connection.findOneAndRemove({
      requester: connection.requester,
      recipient: connection.recipient,
    });

    await User.findOneAndUpdate(
      { _id: connection.recipient },
      { $pull: { connections: removeRequestConnection._id } }
    );

    await User.findOneAndUpdate(
      { _id: connection.requester },
      { $pull: { connections: removeRecipientConnection._id } }
    );
  }

  res.json({ message: "Removed connection" });
};

exports.searchConnection = async (req, res) => {
  const { name } = req.query;
  if (!name.trim()) return sendError(res, "Invalid request!");

  const result = await Connection.find({
    name: { $regex: name, $options: "i" },
  });

  const connections = result.map((connection) => {
    return {};
  });
  res.json({ results: connections });
};
