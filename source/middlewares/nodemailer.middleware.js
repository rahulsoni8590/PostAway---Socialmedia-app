import nodemailer from "nodemailer"

export const sendEmail = async function(otp){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj"
        }
    })

    const mailOptions = {
        from:"codingninjas2k16@gmail.com",
        to:"rajsoni9644@gmail.com",
        subject:"Otp for Password Reset",
        text:`Otp is ${otp}\nOTP will expire in 24 hours`
    }

    try{
        const result = await transporter.sendMail(mailOptions)
        console.log("OTP sent")
    }catch(err){
        throw new Error("Failed to send OTP")
    }
}