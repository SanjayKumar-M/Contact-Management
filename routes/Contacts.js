import Express from "express";
import { getContact,createContact,updateContact,deleteContact } from "../Controllers/contactController.js";
const contactRoutes = Express.Router()

contactRoutes.route('/').post(createContact)

contactRoutes.route('/:id').get(getContact)

contactRoutes.route('/:id').put(updateContact)

contactRoutes.route('/:id').delete(deleteContact)

export default contactRoutes


// mongodb://localhost:27017