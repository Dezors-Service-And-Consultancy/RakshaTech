const express = require("express");
const {register} = require("../controller/usersController");
const usersRouter = express.Router();

usersRouter.post("/register", register);

module.exports = usersRouter;