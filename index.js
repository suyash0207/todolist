const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();//it contains all the dependencies needed for express to  work    properly    with express.   It is possible  to change   this configuration  in the future.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){


    Contact.find({}, function(err, contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Todo List",
            contact_list: contacts
        });

    })
  
})
app.post('/create-contact', function(req, res){
     
    Contact.create({
         //passing value
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
  

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

// for deleting a contact from the database
app.get('/delete-contact', function(req, res){
    console.log(req.query);
    // get the id from query in the url
    let id = req.query.id;

    //find the contact in the database using id 
    Contact.findOneAndDelete(id, function(err){
        if(err){
        console.log('Error in deleting the contact');
        return;
    }
    
    return res.redirect('back');
    });

   
});
