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

  try {
    const user = await User.getUserByUsername(username);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

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
    return res.status(200).json({ tokenData, message: "Token Berhasil" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
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
