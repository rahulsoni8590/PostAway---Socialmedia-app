import express from "express";
import OtpController from "./otp.controller.js";

const OtpRouter = express.Router()
const otpController = new OtpController();

OtpRouter.post("/send", (req,res,next)=>{
    otpController.send(req,res,next)
})

OtpRouter.post("/verify", (req,res,next)=>{
    otpController.verify(req,res,next)
})

OtpRouter.put("/reset-password", (req,res,next)=>{
    otpController.reset(req,res,next)
})

export default OtpRouter;

// /api/otp/send: Send an OTP for password reset.
// /api/otp/verify: Verify an OTP.
// /api/otp/reset-password: Reset the user's password.