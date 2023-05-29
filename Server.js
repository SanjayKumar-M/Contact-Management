import Express from "express";

import contactRoutes from "./routes/Contacts.js";

const app = Express()

const PORT = 3000;

app.use('/api/contacts', contactRoutes)

app.listen(PORT, () => { console.log(`Connection established successfully at ${PORT}`) })