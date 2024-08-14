// const userid = req.userid
import PostRepository from "./posts.repository.js";

export default class PostController{
    constructor(){
        this.postRepository = new PostRepository()
    }

    async getAll(req,res){

        const posts = await this.postRepository.getAll()
        res.status(200).send(posts) 
    }

    //doubt how to get the objectid of users in schema
    async getUserPost(req,res){
        const userid = req.userid
        const posts = await this.postRepository.getUserPost(userid)
        res.status(200).send(posts) 
    }

    async getOne(req,res){
        const postid = req.params.postId;
        const posts = await this.postRepository.getOne(postid)
        res.status(200).send(posts) 
    }

    async add(req,res){
        const newPost = {
            caption:req.body.caption,
            userid: req.userid
        }
        const avatar = req.file.filename;
        await this.postRepository.add(newPost);
        res.status(201).send(newPost)
    }

// Note :: in update and delet also check for userid along with postid to make change

    async delete(req,res){
        const userid = req.userid
        const post = await this.postRepository.delete(req.params.postId,userid);
        res.status(200).send(post)
    }

    async update(req,res){
        const userid = req.userid
        const newCaption = req.body
        const postid = req.params.postId
        const post = await this.postRepository.update(postid,newCaption,userid);
        res.status(200).send(post)
    }
}