const connection = require('../db/conn');

const User = {};

User.createUser = (user , callback) => {
    connection.query('INSERT INTO user SET ?',user,(error,results) => {
        callback(error,results);
    });
};

User.getUser = (email , callback) => {
    connection.query('SELECT * FROM user WHERE email = ?',email,(error,results) => {
        callback(error,results[0]);
       
    });
};

 User.checkoutDetails = (details , callback) => {
    connection.query('INSERT INTO checkout SET ?',details,(error,results) => {
        callback(error,results); 
    });  
};

module.exports = User;

