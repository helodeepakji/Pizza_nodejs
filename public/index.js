const express = require('express');
const app = express();
const router = require('../router/route');
const Port = 8000;
const path = require('path');
const hbs = require('hbs');
const fileUpload = require('express-fileupload');


const staticPath = path.join(__dirname, "/../static");
const viewPath = path.join(__dirname, "/../views");
const layoutPath = path.join(__dirname, "/../views/layout");


app.set('views', viewPath);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));
hbs.registerPartials(layoutPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());


app.use('/', router);


app.listen(Port, () => {
    console.log(`Example app http://127.0.0.1:${Port}`)
})