const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dt = require('datatables');
const morgan = require('morgan');
const uuid = require('node-uuid');

let PORT = process.env.PORT || 3000;

<<<<<<< HEAD
// public
app.use(express.static('./app/view/public'));

// routing; when a dir is required, it will look for the index.js; index.js exports router
app.use(require('./app/routes'));

// middleware
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

=======
// start logging
morgan.token('id', function getId(req) {
    return req.id
})

// start express
const app = express();

// assign uuid to requests
app.use(assignId);
app.use(morgan(':id :method :url :response-time'));

// time stamp logging
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next()
});

// public
app.use(express.static('./app/view/public'));

// routing; when a dir is required, it will look for the index.js; index.js exports router
app.use(require('./app/routes'));

// morgan - assign an id to logs
function assignId(req, res, next) {
    req.id = uuid.v4();
    next();
}

>>>>>>> 1f37b12b98698b11081a74736188eadbe060bfb5
app.listen(3000, () => { console.log(`App is listening on PORT: ${PORT}`) });