import express from "express"
import PostController from "./posts.controller.js"
import uploadFile from "../../middlewares/fileUpload.middleware.js";
const PostRouter = express.Router()
const postController = new PostController();

PostRouter.get("/all",(req,res)=>{
    postController.getAll(req,res)
})

PostRouter.get("/",(req,res)=>{
    postController.getUserPost(req,res)
})

PostRouter.get("/:postId",(req,res)=>{
    postController.getOne(req,res)
})

PostRouter.post("/", uploadFile.single("imageUrl"), (req,res)=>{
    postController.add(req,res)
})

PostRouter.delete("/:postId",(req,res)=>{
    postController.delete(req,res)
})

PostRouter.put("/:postId",(req,res)=>{
    postController.update(req,res)
})

export default PostRouter

// /api/posts/all: Retrieve all posts from various users to compile a news feed.
// /api/posts/:postld: Retrieve a specific post by ID.
// /api/posts/: Retrieve all posts for a specific user to display on their profile page.
// /api/posts/: Create a new post.
// /api/posts/:postid: Delete a specific post.
// /api/posts/:postid: Update a specific post.