const express = require('express');
const router = express.Router();
const {insertContact,viewContact} = require('../controller/contactController');
const {insertUser,getuser,viewlogin,viewsignup,userLogout,userCheckout,userCheckoutSubmit} = require('../controller/userController');
const {getallProduct,getProductonly,searchProduct} = require('../controller/productController');

const requireAuth = require('../middleware/protected')

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

router.get('/',getallProduct);

router.post('/search',searchProduct);

router.get('/product/:sno',getProductonly);

router.get('/contact',viewContact);

router.post('/contact',insertContact);

router.get('/signup',viewsignup);

router.post('/signup',insertUser);

router.get('/login',viewlogin);

router.post('/login',getuser);

router.get('/logout',userLogout);

router.get('/checkout',userCheckout);

router.post('/checkout',userCheckoutSubmit);

module.exports = router;