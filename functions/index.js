const functions = require("firebase-functions")
const express = require('express')
// Cross-Origin Resource Sharing
const cors = require('cors')

// APP config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// Routes
const indexRoute = require('./routes/indexRoutes')
const paymentRoute = require('./routes/payment')

app.use('/', indexRoute)
app.use('/', paymentRoute)

// Listen command
exports.api = functions.https.onRequest(app)


// EndPoint
// http://localhost:5001/clone-915b4/us-central1/api