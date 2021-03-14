const sampleroute = require('./SampleRoute')
const userRoute = require('./user.route')
const express = require('express')
module.exports = function(app) {
    app.use(express.json());
    app.use('/sampleroute', sampleroute)
    app.use('/user', userRoute)
}