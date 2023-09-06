import expressAsyncHandler from "express-async-handler";
import ContactSchema from "../model/contactmodel.js";

const getContact = expressAsyncHandler(async (req, res) => {
  const contacts = await ContactSchema.find()
  res.json(contacts);
});

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, ph } = req.body;

  if (!name || !email || !ph) {
    
    res.status(400).json({ message: "Please provide name, email, and ph." });
  } else {
    
   const createNewContact  = await ContactSchema.create({
    name,email,ph
   })

    res.status(201).json(createNewContact); 
  }
});

const updateContact = expressAsyncHandler(async (req, res) => {
  const contactId = req.params.id;
 
  res.json({ message: `Updated contact with ID ${contactId}` });
});

const deleteContact = expressAsyncHandler(async (req, res) => {
  const contactId = req.params.id;

  res.json({ message: `Deleted contact with ID ${contactId}` });
});

export { getContact, createContact, updateContact, deleteContact };
