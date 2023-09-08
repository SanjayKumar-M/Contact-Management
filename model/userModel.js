import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        
        ref:"User"
    },

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
    timestamps: true,
})

export default mongoose.model('User',userSchema);