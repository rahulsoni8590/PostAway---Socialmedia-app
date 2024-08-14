import { json } from "express";
import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'logs.log' }),
    ],
  })

const loggermidddleware = (req,res,next)=>{
    const body = JSON.stringify(req.body)
    const method = req.method
    const time = new Date().toLocaleString()
    const url = req.originalUrl
    if(url.includes("users") ){
        logger.info({
            url,method,time
        })
    }else{
        logger.info({
            url,method,body,time
        })
    }
    
    next()
}

export default loggermidddleware