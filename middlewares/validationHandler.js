import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
const validationHandler = expressAsyncHandler(async(req,res,next)=>{

    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader  && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,"Thisistokensecret",(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.findUser = decoded.findUser;
            next()

        });
        if(!token){
            res.status(401);
            throw new Error("User Token is not Authorized");
        }
    }

}) 

export default validationHandler