const express = require('express');
const router = express.Router();
const {insertContact,viewContact} = require('../controller/contactController');
const {insertUser} = require('../controller/userController');
const {getallProduct,getProductonly} = require('../controller/productController');

router.get('/', getallProduct);

router.get('/product/:sno',getProductonly);

router.get('/contact',viewContact);

router.post('/contact',insertContact);

router.get('/signup',insertUser);

module.exports = router;