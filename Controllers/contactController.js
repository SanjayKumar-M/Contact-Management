import expressAsyncHandler from "express-async-handler";

const getContact = expressAsyncHandler(async(req, res) => {
  res.json({ "message": `Fetched all contacts from ${req.params.id}` });
});

const createContact = expressAsyncHandler(async(req, res) => {
  res.json({ "message": "This is Contact Page" });
  const {name,email,ph} = req.body;
  !name || !email || ph ? res.status(400): res.status(200);
});

const updateContact = expressAsyncHandler (async(req, res) => {
  res.json({ "message": `Update the contacts for ${req.params.id}` });
});

const deleteContact = expressAsyncHandler(async(req, res) => {
  res.json({ "message": `Deleted a contact for ${req.params.id}` });
});

export { getContact, createContact, updateContact, deleteContact };
