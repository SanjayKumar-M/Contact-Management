import Express from "express";

import contactRoutes from "./routes/Contacts.js";
import errHandler from "./middlewares/errHandler.js";

const app = Express()

const PORT = 8080;
app.use(Express.json())
app.use(errHandler)
app.use('/api/contacts', contactRoutes)

app.listen(PORT, () => { console.log(`Connection established successfully at ${PORT}`) })