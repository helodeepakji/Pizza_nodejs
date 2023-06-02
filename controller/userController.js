const User = require('../model/user');

const insertUser = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    }
    User.createUser(user,(err,results)=>{
        if(!err){
            console.log('success');
            res.send('success');
        }
    });

};

const getuser = (req, res) => {
    const email =   req.body.email;
    
    User.getUser(email,(err,results)=>{
        if(!err){
            console.log(results);
          if(results){
            if(req.body.password==results.password){
                res.send('login success');
            }
            else{
                res.send('incorrect password');
            }
          }
          else{
            res.send('user not found');
          }
          
        }
    });
};
const viewlogin=(req,res)=>{
    res.render('login');
}


module.exports = {insertUser,getuser,viewlogin};