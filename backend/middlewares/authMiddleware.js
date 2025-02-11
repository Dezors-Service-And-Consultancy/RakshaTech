const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import your user model

// Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// Admin Middleware
const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access Forbidden" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { verifyToken, adminMiddleware };
