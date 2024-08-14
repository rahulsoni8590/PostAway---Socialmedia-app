import express from "express"
import FriendController from "./friend.controller.js";

const FriendRouter = express.Router();
const friendController = new FriendController();

FriendRouter.get("/get-friends/:userld",(req,res)=>{
    friendController.getFriends(req,res)
})

FriendRouter.get("/get-pending-requests",(req,res)=>{
    friendController.pendingRequest(req,res)
})

FriendRouter.get("/toggle-friendship/:friendld",(req,res)=>{
    friendController.toggleFriend(req,res)
})

FriendRouter.get("/response-to-request/:friendld",(req,res)=>{
    friendController.friendRequest(req,res)
})

export default FriendRouter;



// /api/friends/get-friends/:userld: Get a user's friends.
// /api/friends/get-pending-requests: Get pending friend requests.
// /api/friends/toggle-friendship/:friendld: Toggle friendship with another user.
// /api/friends/response-to-request/:friendld: Accept or reject a friend request.
