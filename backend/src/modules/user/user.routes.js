const express = require("express");

const router = express.Router();

const controller = require("./user.controller");

const auth = require("../../middleware/auth.middleware");

router.post("/send-otp", controller.sendOTP);

router.post("/logout", controller.logout);

router.post("/verify-otp", controller.verifyOTP);

router.get("/me", auth, controller.getMe);

module.exports = router;