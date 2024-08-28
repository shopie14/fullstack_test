const DBPool = require("../config/dbConnection");
const response = require("../routes/response");

// Add Friend
const addFriend = async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.body;

  try {
    const SQLQuery = "INSERT INTO friendships (user_id, friend_id) VALUES (?, ?)";
    await DBPool.query(SQLQuery, [userId, friendId]);
  } catch (error) {
    console.log("Error adding friend:", error);

    res.status(500).json({
      error: "Failed to add friend",
    });
  }
};

// Friend List
const friendList = async (req, res) => {
  const userId = req.user.id;

  try {
    const SQLQuery =
      "SELECT * FROM users JOIN friendships ON users.id = friendships.friend_id WHERE friendships.user_id = ?";
    const [rows] = await DBPool.query(SQLQuery, [userId]);
    response(200, rows, "Friend deleted successfully", res);
  } catch (error) {
    console.error("Error fetching friend list:", error);
    res.status(500).json({ error: "Failed to fetch friend list" });
  }
};

// Delete Friend List
const deletFriend = async (req, res) => {
  const userId = req.user.id;
  const { friendId } = req.params;

  try {
    const SQLQuery = "DELETE FROM friendships WHERE user_id = ? AND friend_id = ?";
    await DBPool.query(SQLQuery, [userId, friendId]);

    const userData = {
      userId,
      friendId,
    };
    response(200, userData, "Friend deleted successfully", res);
  } catch (error) {
    console.error("Error deleting friend:", error);
    res.status(500).json({ error: "Failed to delete friend" });
  }
};

module.exports = {
  addFriend,
  friendList,
  deletFriend,
};
