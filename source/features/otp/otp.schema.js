import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId, require:true},
    otp:{type:String, require:true},
    createdAt: { type: Date, expires: '1d', default: Date.now }
})

export default OtpSchema