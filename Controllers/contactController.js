const getContact = (req, res) => {
  res.json({ "message": `Fetched all contacts from ${req.params.id}` });
};

const writeContact = (req, res) => {
  res.json({ "message": "This is Contact Page" });
  console.log(req.body)
  
  
};

const updateContact = (req, res) => {
  res.json({ "message": `Update the contacts for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.json({ "message": `Deleted a contact for ${req.params.id}` });
};

export { getContact, writeContact, updateContact, deleteContact };
