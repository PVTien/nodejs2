const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false
}));

app.listen(3000);