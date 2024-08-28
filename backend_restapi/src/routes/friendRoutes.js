const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware, friendController.added);

router.get("/get", authMiddleware, friendController.getFriend);

router.delete("/delete", authMiddleware, friendController.deleted);

module.exports = router;
