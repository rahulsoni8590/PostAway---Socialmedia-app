import mongoose from "mongoose";

const getClient = async ()=>{
    await mongoose.connect(process.env.MONGO_DB);
    console.log("MongoDb is connected")
    return
}

export default getClient;