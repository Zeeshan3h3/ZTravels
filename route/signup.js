const express = require("express");
//merge params = true for making parent router readable
const router = express.Router();
const user = require("../models/user")
const wrapasync = require("../utils/wrapAsync.js")
const SignupController = require('../controller/signup.js')



router.get("/signup",SignupController.SignUpRender)



router.post("/signup", wrapasync(SignupController.SignUpForm))







module.exports = router;