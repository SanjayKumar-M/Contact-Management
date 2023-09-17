import Express from "express";
import { getContacts,createContact,updateContact,deleteContact,getContact } from "../Controllers/contactController.js";
import validationHandler from "../middlewares/validationHandler.js";
const contactRoutes = Express.Router()

contactRoutes.use(validationHandler)

contactRoutes.route('/').post(createContact)

contactRoutes.route('/').get(getContacts)

contactRoutes.route('/:id').get(getContact)

contactRoutes.route('/:id').put(updateContact)

contactRoutes.route('/:id').delete(deleteContact)

export default contactRoutes

