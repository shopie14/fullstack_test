const DBPool = require("../config/dbConnection");
const response = require("../routes/response");

// Add Friend
const addFriend = async (userId, friendId) => {
  try {
    const SQLQuery = "INSERT INTO friendships (user_id, friend_id) VALUES (?, ?)";
    await DBPool.query(SQLQuery, [userId, friendId]);
    return { success: true, friendId };
  } catch (error) {
    console.log("Error adding friend:", error);
    throw new Error("Failed to add friend");
  }
};

// Friend List
const friendList = async (userId) => {
  try {
    const SQLQuery =
      "SELECT * FROM users JOIN friendships ON users.id = friendships.friend_id WHERE friendships.user_id = ?";
    const [rows] = await DBPool.query(SQLQuery, [userId]);
    return rows;
  } catch (error) {
    console.error("Error fetching friend list:", error);
    throw new Error("Failed to fetch friend list");
  }
};

// Delete Friend
const deletFriend = async (userId, friendId) => {
  try {
    const SQLQuery = "DELETE FROM friendships WHERE user_id = ? AND friend_id = ?";
    await DBPool.query(SQLQuery, [userId, friendId]);
    return { userId, friendId };
  } catch (error) {
    console.error("Error deleting friend:", error);
    throw new Error("Failed to delete friend");
  }
};

module.exports = {
  addFriend,
  friendList,
  deletFriend,
};
