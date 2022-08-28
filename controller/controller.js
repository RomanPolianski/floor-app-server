const contacts = require("../data");

class ContactsController {
  async getContacts(req, res) {
    let page = req.query.page;
    let limit = req.query.limit;
    const start = page * limit - limit;
    const end = start + Number(limit);
    try {
      const contact = contacts.slice(start, end);
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getContactsAmount(req, res) {
    try {
      const contactTotal = contacts.length;
      res.status(200).json({ amount: contactTotal });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContactsController();
