import Express from "express";

const contactRoutes = Express.Router()

contactRoutes.route('/').post()

contactRoutes.route('/:id').get((req, res) => { res.json({ "messgae": `Fetch all contacts from ${req.params.id}` }) })

contactRoutes.route('/:id').put((req, res) => { res.json({ "message": `Update the contacts for ${req.params.id}` }) })

contactRoutes.route('/:id').delete((req, res) => { res.json({ "message": `Deleted a contact for ${req.params.id}` }) })

export default contactRoutes