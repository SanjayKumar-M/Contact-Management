import Express from "express";
import { getContact,writeContact,updateContact,deleteContact } from "../Controllers/contactController.js";
const contactRoutes = Express.Router()

contactRoutes.route('/').post(writeContact)

contactRoutes.route('/:id').get(getContact)

contactRoutes.route('/:id').put(updateContact)

contactRoutes.route('/:id').delete(deleteContact)

export default contactRoutes