import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"}, //userid
    receiver:{type:mongoose.Schema.Types.ObjectId, ref:"User"}, //friendid
    status:{ 
        type:String,
        default:"Pending",
        enum:["Approved","Pending", "Rejected"]
    }
})

export default friendSchema


// /api/friends/get-friends/:userld: Get a user's friends.
// /api/friends/get-pending-requests: Get pending friend requests.
// /api/friends/toggle-friendship/:friendld: Toggle friendship with another user.
// /api/friends/response-to-request/:friendld: Accept or reject a friend request.
