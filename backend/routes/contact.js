const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
    console.log("Request Body:", req.body); // Debugging
    const newContact = new Contact(req.body);
    try {
      const savedContact = await newContact.save();
      res.status(200).json(savedContact);
    } catch (err) {
      console.error("Error saving contact:", err); // Debugging
      res.status(500).json(err);
    }
  });
  


module.exports = router;
