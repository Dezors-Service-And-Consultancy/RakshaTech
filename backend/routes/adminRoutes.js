const express = require("express");
const router = express.Router();
const { adminMiddleware, verifyToken } = require("../middleware/authMiddleware");

router.get("/dashboard", verifyToken, adminMiddleware, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard!" });
});

module.exports = router;
