const express = require("express");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();

require("dotenv").config();

require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

//limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60*60*1000,
  message: 'To many request from this IP, please try again after an hour!'
});

app.use('/', limiter);

//data sanitization against noSQL query injection
app.use(mongoSanitize());

//data sanitization against xss
app.use(xss());

require("./route")(app);

const port = process.env.PORT || 3030;
app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
