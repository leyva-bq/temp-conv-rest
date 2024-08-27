const express = require('express');
const morgan = require('morgan');

// app
const app = express()

// morgan
app.use(morgan('tiny'))
app.use(express.json())

// start server
const PORT = process.env.PORT || 8080
module.exports = app.listen(PORT)