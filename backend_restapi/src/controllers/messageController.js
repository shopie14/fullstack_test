const messageModel = require("../models/messageModel");
const response = require("../routes/response");

const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    const result = await messageModel.createMessage(
      senderId,
      receiverId,
      message
    );

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
    console.error(error);
    return response(
      500,
      null,
      "An error occurred while sending the message",
      res
    );
  }
};

const getMessageList = async (req, res) => {
    try {
      const userId = req.params.userId;
      const messages = await messageModel.getMessageList(userId);
      return res.status(200).json({
        payload: {
          data: messages
        },
        message: "List pesan"
      });
    } catch (error) {
      console.error("Error retrieving message list:", error);
      return res.status(500).json({
        payload: {
          data: null
        },
        message: "An error occurred while retrieving the message list"
      });
    }
  };
  
const removeMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId;

    await messageModel.deleteMessage(messageId);

    return response(200, null, "Message deleted successfully", res);
  } catch (error) {
    console.error(error);
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
