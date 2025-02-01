const User = require("../models/User");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");


const register = asyncHandler(async (req, res) => {
        const { fullname, college, email, password, category } = req.body;
        //Check if all fields are filled
        if (!fullname || !college || !email || !password || !category) {
            res.status(400).json({ error: "All fields are required"});
        }
        //Check if email already exist
        const userFound = await User.findOne({ email });
        if (userFound) {
          res.status(400).json({ error: "User already exists"});
        }
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //Register the user
        const userRegistered = await User.create({
          fullname,
          college,
          email,
          password: hashedPassword,
          category,
        });
        //save the user
        await userRegistered.save();
        //send the response
        res.status(201).json({
          status: "success",
          message: "User registered successfully",
          user: {
            _id: userRegistered._id,
            fullname: userRegistered.fullname,
            college: userRegistered.college,
            email: userRegistered.email,
            category: userRegistered.category,
          }
        });
});

module.exports = {register};

