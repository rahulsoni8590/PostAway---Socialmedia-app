import express from "express"
import LikeController from "./likes.controller.js";

const LikeRouter = express.Router()
const likeController = new LikeController();

LikeRouter.get("/:id",(req,res)=>{
    likeController.getLike(req,res)
})

LikeRouter.get("/toggle/:id",(req,res)=>{
    likeController.postLike(req,res)
})

export default LikeRouter;

// type = comment/post
// /api/likes/:id: Get likes for a specific post or comment.
// /api/likes/toggle/:id: Toggle like on a post or comment.
// /toggle/:id