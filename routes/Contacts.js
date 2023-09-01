import Express from "express";
import { getContact } from "../Controllers/contactController.js";
const contactRoutes = Express.Router()

contactRoutes.route('/').post()

contactRoutes.route('/:id').get()

contactRoutes.route('/:id').put()

contactRoutes.route('/:id').delete()

export default contactRoutes