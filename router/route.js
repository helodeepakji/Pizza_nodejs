const express = require('express');
const router = express.Router();
const {insertContact,viewContact} = require('../controller/contactController');
const {insertUser,getuser,viewlogin,viewsignup} = require('../controller/userController');
const {getallProduct,getProductonly} = require('../controller/productController');


router.get('/', getallProduct);

router.get('/upload',(req,res)=>{
    res.render('upload');
});

router.post('/upload',(req,res)=>{
    const image = req.files.image;

    image.mv('static/'+image.name,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(req.files.image);
            res.send('upload success');
        }
    });
});

router.get('/product/:sno',getProductonly);

router.get('/contact',viewContact);

router.post('/contact',insertContact);

router.get('/signup',viewsignup);
router.post('/signup',insertUser);

router.get('/login',viewlogin);

router.post('/login',getuser);

module.exports = router;