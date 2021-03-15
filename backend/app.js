const express = require("express");
<<<<<<< HEAD
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

=======
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
>>>>>>> 9f3f9283bc5dfadd4b3254ea9c1cc91181621871
const app = express();
const cors = require('cors');

require("dotenv").config();
require("./config/database");

const port = process.env.PORT || 3030;

app.use(cors());
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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
