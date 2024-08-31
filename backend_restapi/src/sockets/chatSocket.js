const messageController = require("../controllers/messageController");

const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
      try {
        const result = await messageController.sendMessage({
          body: { senderId, receiverId, message },
        });

        if (result) {
          socket.emit("messageSent", result.data); 
          socket.to(receiverId).emit("newMessage", result.data); 
        }
      } catch (error) {
        console.error("Error in sending message via Socket.IO:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = chatSocket;
