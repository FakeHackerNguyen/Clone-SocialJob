require("dotenv").config();
require("./db");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const userRouter = require("./routes/user.route");
const chatRouter = require("./routes/chat.route");
const messageRouter = require("./routes/message.route");
const connectionRouter = require("./routes/connection.route");
const postRouter = require("./routes/post.route");
const interactionRouter = require("./routes/interaction.route");
const jobRouter = require("./routes/job.route");
const companyRouter = require("./routes/company.route");
const universityRouter = require("./routes/university.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/files", express.static("files"));

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
app.use("/api/connection", connectionRouter);
app.use("/api/post", postRouter);
app.use("/api/interaction", interactionRouter);
app.use("/api/job", jobRouter);
app.use("/api/company", companyRouter);
app.use("/api/university", universityRouter);

const server = app.listen(process.env.PORT, function () {
  console.log(`Server is running port ${process.env.PORT}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to Socket.io");

  socket.on("setup", (userId) => {
    console.log(userId);
    socket.join(userId);
    socket.emit("connected");
  });

  socket.on("join-chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("new-message", (newMessage) => {
    const chat = newMessage.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      console.log(user);
      if (user == newMessage.sender._id) return;

      socket.in(user).emit("message-received", newMessage);
    });
  });
});
