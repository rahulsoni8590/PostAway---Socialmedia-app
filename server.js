import "./env.js";
import express from "express"

import session from "express-session";
import jwtAuth from "./source/middlewares/jwt.middleware.js"
import loggermidddleware from "./source/middlewares/logger.middleware.js";
import { ErrorHandlerMiddleware } from "./source/middlewares/errorHandler.middleware.js";

import UserRouter from "./source/features/users/users.routes.js";
import PostRouter from "./source/features/posts/posts.routes.js";
import CommentRouter from "./source/features/comments/comments.routes.js";
import LikeRouter from "./source/features/likes/likes.routes.js";
import FriendRouter from "./source/features/friend/friend.routes.js";
import OtpRouter from "./source/features/otp/otp.routes.js";
import getClient from "./config/mongoose.config.js"

const application = express();
const port = 8000

application.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }))

application.use(express.json())
application.use(express.urlencoded({extended:true}));

//loggermidddleware
application.use(loggermidddleware)

application.use("/api/users", UserRouter)
application.use("/api/posts", jwtAuth, PostRouter)
application.use("/api/comments", jwtAuth, CommentRouter)
application.use("/api/likes", jwtAuth, LikeRouter)
application.use("/api/friends", jwtAuth, FriendRouter)
application.use("/api/otp", jwtAuth, OtpRouter)

application.use(ErrorHandlerMiddleware)

application.listen(port, ()=>{
    console.log("Application Listening on port 8000")
    getClient();
})


// /api/users/signup: Register a new user account.
// /api/users/signin: Log in as a user.
// /api/users/logout: Log out the currently logged-in user.
// /api/users/logout-all-devices: Log out the user from all devices.
