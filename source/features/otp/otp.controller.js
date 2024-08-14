import bcrypt from "bcrypt"
import OtpRepository from "./otp.repository.js"
import otpGenerator from 'otp-generator'
import {sendEmail} from "../../middlewares/nodemailer.middleware.js"
export default class OtpController{
    constructor(){
        this.otpRepository = new OtpRepository()
    }

    async send(req,res,next){
        const id = req.userid;
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        await this.otpRepository.send(id, otp);
        const result = await sendEmail(otp);
        res.status(200).send("OTP Sent")
    }

    async verify(req,res,next){
        const otp = req.body.otp;
        const user = req.userid
        const verify = await this.otpRepository.verify(otp, user) 
        if(verify){
            res.status(200).send("OTP verified")
        }else{
            res.status(400).send("OTP verification failed")
        }
    }

    async reset(req,res,next){
        const newPassword = req.body.newPassword;
        const userid = req.userid 
        const hashedpassword = await bcrypt.hash(newPassword, 10)
        const result = await this.otpRepository.reset(userid, hashedpassword);
        if(result){
            res.status(201).send("Password Updated")
        } else{
            res.status(400).send("Failed")

        }
    }
}