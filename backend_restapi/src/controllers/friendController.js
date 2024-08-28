const response = require("../routes/response");
const friendShip = require("../models/friendModel");

const added = async (req, res) => {
  const { friendId } = req.body;

  try {
    await friendShip.addFriend(req.userId, friendId);
    response(200, friendShip.addFriend, "Friend added successfully", res);
  } catch (error) {
    console.error("Error adding friend:", error);
    response(500, null, "Failed to fetch friend list", res);
  }
};

const getFriend = async (req, res) => {
  try {
    const friends = friendShip.friendList(req.userId);
    response(200, friends, "Friend di temukan!", res);
  } catch (error) {
    console.error("Error fetching friend list:", error);
    response(500, null, "Failed to fetch friend list", res);
  }
};

const deleted = async (req, res) => {
  const { friendId } = req.body;

  try {
    await friendShip.deletFriend(req.userId, friendId);
    const userData = {
      userId: req.userId,
      friendId,
    };
    response(200, userData, "Friend deleted successfully", res);
  } catch (error) {
    console.error("Error deleting friend:", error);
    response(500, null, "Failed to delete friend", res);
  }
};

module.exports = {
  added,
  getFriend,
  deleted,
};
