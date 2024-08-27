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

const updateUserProfile = async (username, password, no_whatsapp, kota) => {
  SQLQuery =
    "UPDATE users SET password = ?, no_whatsapp = ?, kota = ? WHERE username = ?";
  await DBPool.query(SQLQuery, [password, no_whatsapp, kota, username]);
};

const deleteUser = async (username) => {
  SQLQuery = "DELETE FROM users WHERE username = ?";
  await DBPool.query(SQLQuery, [username]);
};

module.exports = {
  createUser,
  getUserByUsername,
  updateUserProfile,
  deleteUser,
};
