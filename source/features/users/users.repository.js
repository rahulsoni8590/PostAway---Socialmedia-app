
import mongoose from "mongoose";
import { UserSchema } from "./users.schema.js";
import { ApplicationError } from "../../middlewares/errorHandler.middleware.js";

export const userModel = mongoose.model("User", UserSchema) //M//

export default class UserRepository{

    async signUp(user){
    
        return newUser = await userModel.create(user)        
    }

    async findUser(user){
        try{
            const find = await userodel.findOne({email:user})
            return find
        }catch(err){
            throw new ApplicationError("User not Found", 400)
        }
        
    }

    async getUser(id){
        try{
            const user = await userModel.findById(id).select("name email gender -_id").exec()
            console.log(user)
            return user
        }catch(err){
            throw new ApplicationError("User Not found", 400)
        }
        
    }

    async getAllUsers(){
        try{
            const users = await userModel.find().select("name email gender -_id").exec()
            return users
        }catch(err){
            throw new ApplicationError("Failed Request", 400)
        }

    }

    async updateUser(id,data){
        try{
            const updatedUser = await userModel.findByIdAndUpdate(id, data, {new:true}).select("name email gender -_id").exec()
            return updatedUser
        }catch(err){
            throw new ApplicationError("Failed Updating User", 400)
        }
    }
}

// User Profile Routes
// /api/users/get-details/:userld: Retrieve user information, ensuring sensitive data like passwords is not exposed.
// /api/users/get-all-details: Retrieve information for all users, avoiding display of sensitive credentials like passwords.
// /api/users/update-details/:userld: Update user details while ensuring that sensitive data like passwords remains secure and undisclosed.