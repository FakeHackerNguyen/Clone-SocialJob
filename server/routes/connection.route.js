const express = require("express");
const {
  getConnections,
  requestConnection,
  removeConnection,
  responseConnection,
  getPendingConnection,
} = require("../controllers/connection.controller");
const { isAuth } = require("../middlewares/auth");

const router = express.Router();

router.get("/get-connections", isAuth, getConnections);
router.get("/get-pending-connections", isAuth, getPendingConnection);
router.post("/request-connection", isAuth, requestConnection);
router.post("/response-connection", isAuth, responseConnection);
router.post("/remove-connection", isAuth, removeConnection);

module.exports = router;
