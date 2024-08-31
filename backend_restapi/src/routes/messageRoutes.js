const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/send", authMiddleware, messageController.sendMessage);
router.get("/list/:userId", authMiddleware, messageController.getMessageList);
router.delete(
  "/remove/:messageId",
  authMiddleware,
  messageController.removeMessage
);

module.exports = router;
