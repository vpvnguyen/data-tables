const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql');
const dt = require('datatables');

let PORT = process.env.PORT || 3000;

// public
app.use(express.static('./app/view/public'));

// routing; when a dir is required, it will look for the index.js; index.js exports router
app.use(require('./app/routes'));

// middleware
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.listen(3000, () => { console.log(`App is listening on PORT: ${PORT}`) });