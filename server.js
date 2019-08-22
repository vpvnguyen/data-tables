const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql');
const dt = require('datatables');

let PORT = process.env.PORT || 3000;

// middleware
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// public
app.use(express.static('./app/view/public'));

// define the home page route
router.get('/', (req, res) => {
    res.send('home page');
});

// define the about route
router.get('/api/data', function (req, res) {
    res.send('t1');
})

module.exports = router