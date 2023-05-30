const Contact = require('../model/contact')

const insertContact = (req, res) => {

    const contact = {
        name: 'Shivani',
        email: 'shivani@gmail.com',
        phone: '8076763204',
        message: 'me node'
    }

    Contact.createContact(contact,(err,results)=>{
        if(!err){
            console.log("success");
        }
    });

    res.render("index")
    
};

module.exports = {insertContact};