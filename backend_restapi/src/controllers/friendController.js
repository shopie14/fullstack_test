const response = require("../routes/response");
const friendShip = require("../models/friendModel");

const added = async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.body;

  try {
    const result = await friendShip.addFriend(userId, friendId);
    response(200, result, "Friend added successfully", res);
  } catch (error) {
    console.error("Error adding friend:", error);
    response(500, null, error.message, res);
  }
};

const getFriend = async (req, res) => {
  const userId = req.user.id;

  try {
    const friends = await friendShip.friendList(userId);  // Ensure await is used
    response(200, friends, "Friend found successfully", res);
  } catch (error) {
    console.error("Error fetching friend list:", error);
    response(500, null, error.message, res);
  }
};

const deleted = async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.body;

  try {
    const result = await friendShip.deletFriend(userId, friendId);
    response(200, result, "Friend deleted successfully", res);
  } catch (error) {
    console.error("Error deleting friend:", error);
    response(500, null, error.message, res);
  }
};

module.exports = {
  added,
  getFriend,
  deleted,
};
