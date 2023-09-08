import mongoose from "mongoose";
const connectDB = async() =>{

    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/Contact-Management", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("Database Connected Successfully !",connect.connection.host,connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1)
    }

}
export default connectDB