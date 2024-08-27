const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes/temperature.routes');

// app
const app = express()

// morgan
app.use(morgan('tiny'))
app.use(express.json())

// api routes
app.use('/', apiRoutes)

// start server
const PORT = process.env.PORT || 8080
module.exports = app.listen(PORT)