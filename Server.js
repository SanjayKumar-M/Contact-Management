import Express  from "express";
import router from "./routes/Contacts.js";
const app = Express()

app.use("/api/contacts",router)
app.listen(3000,()=>{console.log("Server running successfully...")})
