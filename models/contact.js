const mongoose = require('mongoose');

//this is formate in database to save contact
const contactSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    }

});

//const Contact is created in database to save contact information to the database and return contact informations

const Contact=mongoose.model('Contact',contactSchema);

//this is to import contact information from database

module.exports = Contact;