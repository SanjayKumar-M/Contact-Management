import expressAsyncHandler from "express-async-handler";
import userModel from "../model/userModel.js";

const registerUser = expressAsyncHandler(async(req, res) => {
    const {userName, email, password} = req.body;
    if(!userName || !email || !password){
        res.status(400);
        throw new Error("Enter all the Valid Fields!");
    }

    const registration = await userModel.findOne({email});
    if(registration){
        res.status(400);
        throw new Error("Already Registered ? Login!");
    }
    const hashedPassword = await bcrypt.hash(password,15);
    res.json({hashPassword:`${hashedPassword}`})

    
})
const loginUser = expressAsyncHandler((req, res) => {
    res.json({ message: "Login the user" });
})

const currentUser = expressAsyncHandler((req, res) => {
    (req, res) => {
        res.json({ message: "Get details of the user" });
    }

})

export {registerUser,loginUser,currentUser};