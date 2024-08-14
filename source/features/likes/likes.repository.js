import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import likeSchema from "./likes.schema.js";
import {commentModel} from "../comments/comments.repository.js"
import { postModel } from "../posts/posts.repository.js";

const LikeModel = mongoose.model("Like", likeSchema)

export default class LikeRepository{

    async getLike(id){
        const likes = await LikeModel.findbyid(id)
        return likes
    }

    async postLike(id,type,userid){
        if(type != "comment" && type!= "post"){
            throw new Error("Invalid Type")
        } 
        if(type == "comment"){
            const find = await commentModel.findById(id);
            if(!find){
                throw new Error("CommentId is Invalid") 
            }else{
                const like = await LikeModel.find({userid:new ObjectId (userid), commentid:new ObjectId (id)})
                if(like.length === 0){
                    const newLike = new LikeModel({
                        commentid:id,
                        userid:userid,
                    });
                    await newLike.save()
                    return "Like Added to the Comment"

                }else{
                    await LikeModel.findOneAndDelete({userid:userid, commentid:id})
                    return "Like Remove from the Post"

                }
            }
        }else{
            const find = await postModel.findById(id);
            if(!find){
                throw new Error("PostId is Invalid") 
            }else{
                const like = await LikeModel.find({userid:new ObjectId (userid), postid:new ObjectId (id)})
                if(like.length === 0){
                    const newLike = new LikeModel({
                        postid:id,
                        userid:userid,
                    });
                    await newLike.save()
                    return "Like Added to the Post"
                }else{
                    await LikeModel.findOneAndDelete({userid:userid, postid:id})
                    return "Like Remove from the Post"
                }
            }
        }
    }
}

