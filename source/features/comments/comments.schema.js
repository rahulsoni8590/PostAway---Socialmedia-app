import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    postid:{type:mongoose.Schema.Types.ObjectId, ref:"Post"},
    comment:String,
    like:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Like"
        }
    ]
})

export default commentSchema