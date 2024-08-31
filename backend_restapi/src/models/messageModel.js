const DBPool = require("../config/dbConnection");

const createMessage = async (senderId, receiverId, message) => {
  const SQLQuery = "INSERT INTO Messages (sender_id, receiver_id, message) VALUES (?, ?, ?)";
  try {
    const [result] = await DBPool.query(SQLQuery, [senderId, receiverId, message]);
    return result;
  } catch (error) {
    console.error("Error in createMessage:", error);
    throw error;
  }
};

const getMessageList = async (userId) => {
  const SQLQuery = `
    SELECT DISTINCT 
      CASE 
        WHEN sender_id = ? THEN receiver_id 
        ELSE sender_id 
      END AS friend_id,
      (SELECT message 
       FROM Messages 
       WHERE (sender_id = friend_id AND receiver_id = ?) OR (sender_id = ? AND receiver_id = friend_id)
       ORDER BY created_at DESC LIMIT 1) AS last_message
    FROM Messages
    WHERE sender_id = ? OR receiver_id = ?`;
  
  try {
    const [rows] = await DBPool.query(SQLQuery, [userId, userId, userId, userId, userId]);
    return rows;
  } catch (error) {
    console.error("Error in getMessageList:", error);
    throw error;
  }
};


const deleteMessage = async (messageId) => {
  const SQLQuery = "DELETE FROM Messages WHERE id = ?";
  try {
    const [result] = await DBPool.query(SQLQuery, [messageId]);
    return result;
  } catch (error) {
    console.error("Error in deleteMessage:", error);
    throw error;
  }
};

module.exports = {
  createMessage,
  getMessageList,
  deleteMessage,
};
