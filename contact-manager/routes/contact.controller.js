const express = require('express');
const Contact = require('../model/contact');
const contactRouter = express.Router();


//Create Contact
contactRouter.post('/api/contacts', async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.body ;
        const newContact = await Contact.create({ firstName, lastName, email, phone });
        console.log("Contact Saved Successfully✅");
        res.status(201).json({ message: "Contact Added", contact: newContact });
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
});

//Get all Contact
contactRouter.get("/api/contacts", async (req, res) => {
    try{
   const getAllContacts = await Contact.find({});
   res.status(201).json({message:"All Contacts are fetched Succesfuul✅", getAllContacts});
    }catch(err) {
        res.status(400).send("Error:" + err.message);
    }
});

//Get Contact By Id
contactRouter.get("/api/contacts/:id", async (req, res) => {
    try{ 
        const contactId = req.params.id;
        const contact = await Contact.findById(contactId);
        if(!contact) {
            res.status(404).json({message:"contact not found!"});
        }
        res.json({contact});

    }catch(err){
        res.status(400).send("Error:" + err.message);
    }
});

//update Contact
contactRouter.put("/api/contacts/:id", async (req, res) => {
    try{
        const Id = req.params.id;
        const updatedContact = await Contact.findByIdAndUpdate(Id, {firstName:'Akshay', lastName:'Saini'});
        if(!updatedContact) {
            res.status(404).json({message:"Contact not Found!"});
        }
        res.json({message:"Contact Updated succcesfully✅", updatedContact});

    }catch(err) {
        res.status(400).send("Error: " + err.message);
    }
});

//Delete Contact
contactRouter.delete("/api/contacts/:id", async (req, res) => {
    try{
     const contactId = req.params.id;
     const deletedContact = await Contact.findByIdAndDelete(contactId);
     if(!deletedContact) {
        res.status(404).json({message:'Contact not found'});
     }
     res.status(200).json({message:'Contact deleted successfully✅', deletedContact});
    }catch(err) {
        res.status(400).send("Error: " + err.message);
    }
});

module.exports = contactRouter;