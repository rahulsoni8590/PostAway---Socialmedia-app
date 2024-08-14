import FriendRepository from "./friend.repository.js";

export default class FriendController{
    constructor(){
        this.friendRepository = new FriendRepository();
    }
    

}