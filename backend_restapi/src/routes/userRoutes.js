const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const authMiddleware = require("../middleware/authMiddleware");

// Create Users - POST

router.post("/register", userController.register);

router.post("/login", userController.login);

router.put("/update", authMiddleware, userController.editProfile);

router.delete("/delete", authMiddleware, userController.deletProfile);

module.exports = router;
