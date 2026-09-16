const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

if (!isValidEmail(email)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email address",
  });
}

if (!isValidPassword(password)) {
  return res.status(400).json({
    success: false,
    message:
      "Password must be at least 6 characters and include uppercase, lowercase, and a special character",
  });
}

const existingUsername = await User.findOne({ username });

if (existingUsername) {
  return res.status(409).json({
    success: false,
    message: "Username already exists",
  });
}

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Signup failed",
      success: false,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.Login = Login;

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPassword = (password) =>
  password.length >= 6 &&
  /[a-z]/.test(password) && // lowercase
  /[A-Z]/.test(password) && // uppercase
  /[^A-Za-z0-9]/.test(password); // special character