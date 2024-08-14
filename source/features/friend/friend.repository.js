import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import friendSchema from "./friend.schema.js";

export const FriendModel = mongoose.model("Friend", friendSchema)

export default class FriendRepository{

}