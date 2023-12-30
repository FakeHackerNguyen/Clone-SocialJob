const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => {
    console.log("Database is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
