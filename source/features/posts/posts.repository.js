import mongoose from "mongoose"
import { ObjectId } from "mongodb";
import postSchema from "./posts.schema.js"

export const postModel = mongoose.model("Post", postSchema);

export default class PostRepository{

    async getAll(){
        const posts = await postModel.find();
        return posts
    }

    async getUserPost(userid){
        const userPosts = await postModel.find({_id:new ObjectId(userid)})
        return userPosts
    }

    async getOne(postid){
        try{
            const post = await postModel.findById(postid)
            return post
        }catch(err){
            throw new Error("post not found")
        }
        
    }

    async add(postData){
        const newPost = new postModel(postData);
        await newPost.save()
        return
    }

    async delete(postid,userid){
        const post = await postModel.find({_id:new ObjectId(postid), userid:new ObjectId(userid)})
        if(post){
            return await postModel.findByIdAndDelete(postid)
        } else{
            throw new Error("Post Not found")
        }
    }

    async update(postid,newCaption,userid){
        const post = await postModel.find({_id:new ObjectId(postid), userid:new ObjectId(userid)})
        if(post){
            const post = await postModel.findByIdAndUpdate(postid,newCaption)
        } else{
            throw new Error("Post Not found")
        }
    }
}