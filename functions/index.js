const functions = require("firebase-functions");
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');


app.use(cors({
    origin: '*'
}));

const bookRoutes = require('./api/book/book.routes')
app.use('/api/book', bookRoutes)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

exports.app = functions.https.onRequest(app);