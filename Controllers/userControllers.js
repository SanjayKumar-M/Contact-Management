import expressAsyncHandler from "express-async-handler";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';

const registerUser = expressAsyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ message: "Enter all the valid fields!" });
    }

    const isUserAvailable = await userModel.findOne({ email });
    if (isUserAvailable) {
        return res.status(400).json({ message: "User already registered. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 15);
    const userRegistration = await userModel.create({
        userName: userName,
        email: email,
        password: hashedPassword
    });

    if (!userRegistration) {
        return res.status(400).json({ message: "User data is not valid." });
    }

    return res.status(201).json({
        _id: userRegistration._id,
        name: userRegistration.userName,
        email: userRegistration.email
    });
    
});

const loginUser = expressAsyncHandler((req, res) => {
    res.json({ message: "Login the user" });
});

const currentUser = expressAsyncHandler((req, res) => {
    res.json({ message: "Get details of the user" });
});

export { registerUser, loginUser, currentUser };
