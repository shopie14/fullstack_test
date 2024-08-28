const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
const friendRoutes = require("./src/routes/friendRoutes");
const messageRoutes = require("./src/routes/messageRoutes");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/friend", friendRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
