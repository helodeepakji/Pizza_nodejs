const User = require('../model/user');

const insertUser = (req, res) => {
    const user = {
        name: 'Deepak',
        email: 'helodeepakji@gmail.com',
        phone: '8076763204',
        password: 'myPassword'
    }
    User.createUser(user,(err,results)=>{
        if(!err){
            console.log('success');
            res.send('success');
        }
    });
};

module.exports = {insertUser};