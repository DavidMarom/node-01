const functions = require("firebase-functions");
const express = require('express')
const app = express()
const path = require('path');


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const bookRoutes = require('./api/book/book.routes')
app.use('/api/book', bookRoutes)

exports.app = functions.https.onRequest(app);