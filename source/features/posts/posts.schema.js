import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    caption:String,
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    like:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ]
})

export default postSchema;