const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const configDB = require('./config.js/keys')

const app= express()

const items = require('./routes/api/items')

//body parser middleware
app.use(bodyParser.json())

// db config
const db = configDB.mongoURI

// connect to mongoose
mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen( port, () => console.log('Server start on port: ' + port ))
