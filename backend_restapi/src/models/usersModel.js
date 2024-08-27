const DBPool = require("../config/dbConnection");

const createUser = async (username, password, no_whatsapp, kota) => {
  SQLQuery =
    "INSERT INTO users (username, password, no_whatsapp, kota) VALUES (?, ?, ?, ?)";
  const [result] = await DBPool.query(SQLQuery, [
    username,
    password,
    no_whatsapp,
    kota,
  ]);

  return result.insertId;
};

const getUserByUsername = async (username) => {
  SQLQuery = "SELECT * FROM users WHERE username = ?";
  const [rows] = await DBPool.query(SQLQuery, [username]);

  return rows[0];
};

module.exports = {
  createUser,
  getUserByUsername,
};
