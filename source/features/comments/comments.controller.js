import CommentRepository from "./comments.repository.js";

export default class CommentController{
    constructor(){
        this.commentRepository = new CommentRepository();
    }
    
    async getComment(req, res){
        const postid = req.params.postId
        const comments = await this.commentRepository.getComment(postid)
        res.status(200).send(comments)
    }

    async addComment(req, res){
        const postid = req.params.postId;
        const userid = req.userid
        const comment = req.body.comment
        const result = await this.commentRepository.addComment(postid,userid,comment);
        res.status(201).send(result)
    }

    async updateComment(req, res){
        const userid = req.userid;
        const commentid = req.params.commentId;
        const newcomment = req.body.newcomment;
        const result = await this.commentRepository.updateComment(userid, commentid, newcomment)
        res.status(200).send(result)
    }
    
    async deleteComment(req, res){
        const userid = req.userid;
        const commentid = req.params.commentId;
        const result = await this.commentRepository.deleteComment(userid, commentid)
        res.status(200).send(result)
    }

}