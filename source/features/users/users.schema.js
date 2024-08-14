import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    gender:{type:String, enum:["male", "female"]},
    friends:{type:Array},
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    friend:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Friend"
            } 
    ]
})