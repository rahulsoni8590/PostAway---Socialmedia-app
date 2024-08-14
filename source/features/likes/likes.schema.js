import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    postid:{type:mongoose.Schema.Types.ObjectId, ref:"Post"},
    commentid:{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}
})

export default likeSchema;