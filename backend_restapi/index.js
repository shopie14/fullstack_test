const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
const friendRoutes = require("./src/routes/friendRoutes");
const messageRoutes = require("./src/routes/messageRoutes");
const chatSocket = require("./src/sockets/chatSocket");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors = require('cors');

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/users", userRoutes);
app.use("/api/friend", friendRoutes);
app.use("/api/message", messageRoutes);

chatSocket(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
