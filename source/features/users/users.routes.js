import express from "express";
import UserController from "./users.controller.js";

const UserRouter = express.Router();
const userController = new UserController()


UserRouter.post("/signup", (req,res,next)=>{
    userController.signUp(req,res,next)
});
UserRouter.post("/signin", (req,res,next)=>{
    userController.signIn(req,res,next)
});

UserRouter.get("/logout", (req,res,next)=>{
    userController.logOut(req,res,next)
});

UserRouter.get("/logout-all-devices", (req,res,next)=>{
    userController.logoutAllDevices(req,res,next)
});

UserRouter.get("/get-details/:id", (req,res,next)=>{
    userController.getUser(req,res,next)
});

UserRouter.get("/get-all-details", (req,res,next)=>{
    userController.getAllUsers(req,res,next)
});

UserRouter.put("/update-details/:id", (req,res,next)=>{
    userController.updateUser(req,res,next)
});

// /api/users/signup: Register a new user account.
// /api/users/signin: Log in as a user.
// /api/users/logout: Log out the currently logged-in user.
// /api/users/logout-all-devices: Log out the user from all devices.


export default UserRouter;