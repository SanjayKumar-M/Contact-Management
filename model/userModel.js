import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    userName:{
        type:String,
        required:[true,"Enter the User Name"]

    },
    email:{
        type:String,
        require:[true,"Enter Correct Email"],
        unique:[true,"Already an user ! Login instead"]

    },
    password:{
        type:String,
        require:[true,"Enter the password"]

    }

},{
    timestamp: true,
})

export default mongoose.model('Users',userSchema);