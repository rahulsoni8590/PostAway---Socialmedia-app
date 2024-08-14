import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import commentSchema from "./comments.schema.js";

export const commentModel = mongoose.model("Comment", commentSchema)

export default class CommentRepository{

    async getComment(postid){
        const comment = commentModel.find({postid:new ObjectId(postid)});
        return comment
    }

    async addComment(postid,userid,comment){
        const newComment = new commentModel({
            userid:userid,
            postid:postid,
            comment:comment
        });
        await newComment.save()
        return newComment
    }

    async updateComment(userid, commentid, newComment){
        const user = commentModel.findOne({userid: new ObjectId(userid)});
        if(user){
            const commentObj = await commentModel.findByIdAndUpdate(commentid, {comment:newComment});
            return commentObj
        } else{
            throw new Error("Unauthorized")
        }

    }

    async deleteComment(userid, commentid){
        const user = commentModel.findOne({userid: new ObjectId(userid)});
        if(user){
            const commentObj = await commentModel.findByIdAndDelete(commentid);
            return commentObj
        } else{
            throw new Error("Unauthorized")
        }
    }
}