const sampleroute = require('./SampleRoute')
const express = require('express')
module.exports = function(app) {
    app.use(express.json());
    app.use('/sampleroute', sampleroute)
}