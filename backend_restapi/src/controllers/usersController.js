const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/usersModel");
const response = require("../routes/response");

dotenv.config();

const register = async (req, res) => {
  const { username, password, no_whatsapp, kota } = req.body;

  const existingUser = await User.getUserByUsername(username);
  try {
    if (existingUser) return response(400, null, "User Sudah ada!", res);

    const hashPassword = await bcrypt.hash(password, 10);
    const userId = await User.createUser(
      username,
      hashPassword,
      no_whatsapp,
      kota
    );

    const userData = {
      username,
      no_whatsapp,
      kota,
    };

    return response(201, userData, "Registrasi User Berhasil", res);
  } catch (err) {
    return response(500, null, "Terjadi kesalahan pada server", res);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.getUserByUsername(username);
  if (!user) return response(400, null, "Invalid credentials", res);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return response(400, null, "Invalid credentials", res);

  const token = jwt.sign(
    {
      id: user.id,
      username: username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  const tokenData = {
    username,
    token,
  };
  return response(400, tokenData, "Token Berhasil", res);
};

const editProfile = async (req, res) => {
  const { password, no_whatsapp, kota } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.updateUserProfile(
    req.user.username,
    hashedPassword,
    no_whatsapp,
    kota
  );

  const userData = {
    username: req.user.username,
    no_whatsapp,
    kota,
  };

  return response(400, userData, "Update profile berhasil!", res);
};

const deletProfile = async (req, res) => {
  await User.deleteUser(req.user.username);

  const userData = {
    username: req.user.username,
  };

  return response(
    400,
    userData,
    `Delete data user ${userData.username} berhasil!`,
    res
  );
};

module.exports = {
  register,
  login,
  editProfile,
  deletProfile,
};
