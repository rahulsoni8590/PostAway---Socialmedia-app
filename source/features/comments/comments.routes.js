import express from "express"
import CommentController from "./comments.controller.js";

const CommentRouter = express.Router();
const commentController = new CommentController();

CommentRouter.get("/:postId",(req,res)=>{
    commentController.getComment(req,res)
})

CommentRouter.post("/:postId",(req,res)=>{
    commentController.addComment(req,res)
})

CommentRouter.put("/:commentId",(req,res)=>{
    commentController.updateComment(req,res)
})

CommentRouter.delete("/:commentId",(req,res)=>{
    commentController.deleteComment(req,res)
})

export default CommentRouter;


// Comments Routes:
// /api/comments/:postId: Get comments for a specific post.
// /api/comments/:postId: Add a comment to a specific post.
// /api/comments/:commentId: Delete a specific comment.
// /api/comments/:commentId: Update a specific comment.