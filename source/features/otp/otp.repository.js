import mongoose from "mongoose";
import OtpSchema from "./otp.schema.js";
import { userModel } from "../users/users.repository.js";
import { ObjectId } from "mongodb";

const OtpModel = mongoose.model("Otp", OtpSchema)

export default class OtpRepository{

    async send(id, otp){
        const user = userModel.findById(id);
        console.log(user)
        if(user){
            const newOtp = new OtpModel({
                otp:otp,
                userid:id
            });
            return await newOtp.save()
        } else{
            throw new Error ("User not found")
        }
    }

    async verify(otp, user){
        try{
            return await OtpModel.findOne({otp:otp, userid: new ObjectId(user)})
        }catch(err){
            throw new Error("Failed")
        }
    }

    //user check if remaining
    async reset(id, newPassword){
        const result = await userModel.findOneAndUpdate({_id: new ObjectId(id)}, {password:newPassword})
        console.log(result)
        return result
    }
}

