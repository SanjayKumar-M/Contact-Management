import expressAsyncHandler from "express-async-handler";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

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

const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Enter all the details !" });
    }
    const findUser = await userModel.findOne({ email });
    const comparedPasswd = await bcrypt.compare(password, findUser.password);

    if (findUser && comparedPasswd) {
        const accesstoken = jwt.sign(
            {
                findUser: {
                    userName: findUser.userName,
                    email: findUser.email,
                    id: findUser.id
                }
            },
            "Thisistokensecret",
            { expiresIn: "10m" }
        );
        res.status(200).json({ accesstoken })
    }
    else {
        res.status(401).json({ message: "Invalid Credentials" })
    }
    res.json({ message: "Login user!" })
});

const currentUser = expressAsyncHandler((req, res) => {
    res.json(req.findUser);
});

export { registerUser, loginUser, currentUser };
