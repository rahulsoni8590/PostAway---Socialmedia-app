import jwt from "jsonwebtoken";
import { Db } from "mongodb";

const jwtAuth = (req,res,next)=>{
    try{
        const token = req.headers["authorization"]
        // const token = req.session.token
        console.log(req.session)
        // token shoulb in Db
        if(!token){
            throw new Error("Token not found")
        }
        const payload = jwt.verify(token, "YOURSECRETKEYGOESHERE");
        req.userid = payload.userid;
        if(payload){
            next()
        }else{
            throw new Error("Authorization Failed")
        }
    }catch(err){
        throw new Error("JWT Token Error")
    }
}

export default jwtAuth


// token in client > session > api
// token in client > session > db > error