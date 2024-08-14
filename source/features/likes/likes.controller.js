import LikeRepository from "./likes.repository.js";

export default class LikeController{
    constructor(){
        this.likeRepository = new LikeRepository();
    }

    async getLike(req,res){
        const id = req.params.id;
        const likes = await this.likeRepository.getLike(id)
        res.status(200).send(likes)
    }

    async postLike(req,res){
        const id = req.params.id;
        const type = req.query.type;
        const userid = req.userid;
        console.log(id)
        console.log(type)
        console.log(userid)
        const likes = await this.likeRepository.postLike(id,type,userid)
        res.status(200).send(likes)
    }
}
