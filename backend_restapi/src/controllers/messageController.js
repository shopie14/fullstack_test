const messageModel = require("../models/messageModel");
const response = require("../routes/response");

const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message) {
      return response(400, null, "Missing required fields", res);
    }

    const result = await messageModel.createMessage(senderId, receiverId, message);

    if (result && result.affectedRows > 0) {
      const messageData = {
        senderId: senderId,
        receiverId: receiverId,
        message: message,
      };
      return response(201, messageData, "Message sent successfully", res);
    } else {
      return response(500, null, "Failed to send message", res);
    }
  } catch (error) {
    console.error("Error in sendMessage:", error);
    return response(500, null, "An error occurred while sending the message", res);
  }
};

const getMessageList = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return response(400, null, "User ID is required", res);
    }

    const messages = await messageModel.getMessageList(userId);

    if (messages.length > 0) {
      return response(200, messages, "Message list retrieved successfully", res);
    } else {
      return response(404, null, "No messages found", res);
    }
  } catch (error) {
    console.error("Error in getMessageList:", error);
    return response(500, null, "An error occurred while retrieving the message list", res);
  }
};

const removeMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId;

    const result = await messageModel.deleteMessage(messageId);

    if (result && result.affectedRows > 0) {
      return response(200, { messageId }, "Message deleted successfully", res);
    } else {
      return response(404, null, "Message not found", res);
    }
  } catch (error) {
    console.error("Error in removeMessage:", error);
    return response(
      500,
      null,
      "An error occurred while deleting the message",
      res
    );
  }
};

module.exports = {
  sendMessage,
  getMessageList,
  removeMessage,
};
