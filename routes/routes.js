const express = require("express");
const contactsController = require("../controller/controller");

const router = express.Router();

router.get("/contacts/", contactsController.getContacts);
router.get("/contacts/amount", contactsController.getContactsAmount);

module.exports = router;
