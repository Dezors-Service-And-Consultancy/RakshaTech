const express = require("express");
const {register} = require("../controller/usersController");
const usersRouter = express.Router();

usersRouter.post("/users/register", register);

module.exports = usersRouter;