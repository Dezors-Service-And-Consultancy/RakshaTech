const express = require('express');
const usersRouter = require('./routes/usersRouter');
const connectDB = require('./utils/connectDB');
const cors = require('cors');
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

//! Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

//! Routes
app.use("/users", usersRouter);

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));