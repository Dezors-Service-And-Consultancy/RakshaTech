const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ishika:XrduiOOJUsc9hLLI@rtech.m02ch.mongodb.net/dezors-rakshatech?retryWrites=true&w=majority&appName=rtech");
    console.log(`DB connected successfully on ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to Mongodb ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;