const functions = require("firebase-functions");
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(
        {
            "message": "Hello World"
        }
    )
})


const bookRoutes = require('./api/book/book.routes')
app.use('/api/book', bookRoutes)


exports.app = functions.https.onRequest(app);