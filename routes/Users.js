import express from "express";
import { registerUser,currentUser,loginUser } from "../Controllers/userControllers.js";
import validationHandler from "../middlewares/validationHandler.js";
const userRouter = express.Router();



userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/currentUser',validationHandler, currentUser)

export default userRouter;