import express from "express";
import { registerUser,currentUser,loginUser } from "../Controllers/userControllers.js";
const userRouter = express.Router();



userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/currentUser',currentUser)

export default userRouter;