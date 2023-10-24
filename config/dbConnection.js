import mongoose from "mongoose";
import 'dotenv/config'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully!");
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;
