const express = require("express");
//merge params = true for making parent router readable
const router = express.Router();
const user = require("../models/user")
const wrapasync = require("../utils/wrapAsync.js")
const passport = require("passport")
const { redirectUrl } = require("../middlewares.js")
const LoginController = require('../controller/login.js')


router.get("/login",LoginController.loginPage )



router.post("/login", redirectUrl ,passport.authenticate("local", { failureRedirect : "/login", failureFlash : true}), wrapasync(LoginController.loginAtanypoint))

router.get("/logout",LoginController.Logout )



module.exports = router;