import express from "express";

const userRouter = express.Router();

userRouter.post('/register',(req,res)=>{
    res.json({message:"Register the user"});
})
userRouter.post('/login',(req,res)=>{
    res.json({message:"Login the user"});
})
userRouter.get('/currentUser',(req,res)=>{
    res.json({message:"Get details of the user"});
})

export default userRouter;