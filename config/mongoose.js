
//require the library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire a connection to the database(to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running Then print the message
db.once('open',function(){
    console.log('Sucessfully connected to database');
});