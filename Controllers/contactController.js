import expressAsyncHandler from "express-async-handler";
import ContactSchema from "../model/contactmodel.js";

const getContact = expressAsyncHandler(async (req, res) => {
  const contacts = await ContactSchema.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.json({ messgage: `Fetched details from ${req.params.id}`, contacts });

});

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, ph } = req.body;

  if (!name || !email || !ph) {

    res.status(400).json({ message: "Please provide name, email, and ph." });
  }

  const createNewContact = await ContactSchema.create({
    name, email, ph
  })

  res.status(201).json(createNewContact);

});

const updateContact = expressAsyncHandler(async (req, res) => {
  const contact = await ContactSchema.findById(req.params.id);
  if(!contact ){
    res.status(400).json({message:"Plz update anything !"});
  }

  const updateTheContact = await ContactSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  res.status(200).json(updateTheContact)
});

const deleteContact = expressAsyncHandler(async (req, res) => {
  const contactId = req.params.id;

  try {
    const result = await ContactSchema.deleteOne({ _id: contactId });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Contact Not Found" });
    } else {
      res.json({ message: `Deleted contact with ID ${contactId}`, contactId });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting contact" });
  }
});


export { getContact, createContact, updateContact, deleteContact };
