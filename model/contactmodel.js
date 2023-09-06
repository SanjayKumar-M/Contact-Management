import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Name"],
    },
    email:{
        type:String,
        required:[true,"Enter Email"],
    },
    ph:{
        type:String,
        required:[true,"Enter Ph Number"],
    }, // This closing curly brace was moved down.
}, {
    timestamps: true,
});

const ContactSchema = mongoose.model("Contact", contactSchema);

export default ContactSchema;
