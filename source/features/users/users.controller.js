import UserRepository from "./users.repository.js";
import { userModel } from "./users.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class UserController{
    constructor(){
        this.userRepository = new UserRepository()
    }

    async signUp(req,res,next){
        try{
            console.log(req.body)
            const {name,email,password,gender} = req.body;
            const hashedpassword = await bcrypt.hash(password,10);
            const newUser = new userModel({
                name:name,
                email:email,
                password:hashedpassword,
                gender:gender
                })
                console.log(newUser)
            await this.userRepository.signUp(newUser)
            res.status(201).send(newUser)
        }catch(err){
            next()
        }
    }

    async signIn(req,res,next){
        try{
            const {email,password}= req.body;
        const user = await this.userRepository.findUser(email);
        if(user){
            const verify = bcrypt.compare(password, user.password)
            if(verify){
            const token = jwt.sign({userid:user._id}, process.env.JWT_SECRET_KEY, {expiresIn:"10h"})
            req.session.token = token
            res.status(200).json({
                token: token,
                status: "Login Successfull"})
        }else{
            res.status(400).send("Login Failed")
        }
        } else{
            res.status(404).send("User not Found")
        }
        }catch(err){
            next()
        }
    }

    logOut(req,res,next){
        req.session.destroy((err)=>{
            if(err){
                res.status(400).send("Failed to logout")
            }else{
                res.status(200).send("logout Successfull")
            }
        })
    }

    logoutAllDevices(req,res){
        
    }

    async getUser(req,res){
        const id = req.params.id;
        const user = await this.userRepository.getUser(id)
        res.status(200).send(user);
    }

    async getAllUsers(req,res){
        const users = await this.userRepository.getAllUsers();
        res.status(200).send(users);
    }

    async updateUser(req,res){
        const data = req.body;
        const id = req.params.id;
        const updatedUser = await this.userRepository.updateUser(id, data);
        res.status(201).send(updatedUser)
    }
}


// async logOut(req, res) {
//     try {
//         // Get the token from request header or body
//         const token = req.headers.authorization.split(" ")[1] || req.body.token || req.query.token;

//         // Check if the token exists in the blacklist
//         const existingToken = await InvalidatedToken.findOne({ token });

//         if (!existingToken) {
//             // Add the token to the blacklist
//             await InvalidatedToken.create({ token });
//         }

//         console.log("Logged out user");
//         res.status(200).send("Logged out successfully");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
// }




// chat gpt

// Logout route
// app.post('/logout', authenticateToken, async (req, res) => {
//     try {
//       const user = await User.findById(req.user.userId);
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       // Invalidate all tokens for the user
//       user.tokens = [];
//       await user.save();
  
//       return res.status(200).json({ message: 'Logged out from all devices' });
//     } catch (error) {
//       console.error('Error logging out:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  

// // Logout route
// app.post('/logout', authenticateToken, async (req, res) => {
//     try {
//       // Add token to blacklist
//       blacklist.add(req.headers['authorization']);
  
//       return res.status(200).json({ message: 'Logged out successfully' });
//     } catch (error) {
//       console.error('Error logging out:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
//   // Protected route example
//   app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route accessed successfully' });
//   });
  
//   // Check if token is revoked middleware
//   const checkTokenRevoked = (req, res, next) => {
//     if (blacklist.has(req.headers['authorization'])) {
//       return res.status(401).json({ message: 'Token revoked. Please log in again' });
//     }
//     next();
//   };

// // Same as before, except the logout route
// // Logout route
// app.post('/logout', (req, res) => {
//     // No action needed for logout in token expiration approach
//     res.status(200).json({ message: 'Logged out successfully' });
//   });