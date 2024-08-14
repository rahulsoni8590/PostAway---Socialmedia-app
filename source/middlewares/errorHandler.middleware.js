export class ApplicationError extends Error{
    constructor(errorMessage,statusCode){
        super(errorMessage);
        this.statusCode = statusCode;
    }
}

export const ErrorHandlerMiddleware = (err,req,res,next)=>{
        if(err instanceof ApplicationError){
            res.status(err.statusCode).send(err.errorMessage)
        } else{
            console.log(err)
            res.status(500).send("Something went Wrong with the server, Pls try later")
        }
    
}