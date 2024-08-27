const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
