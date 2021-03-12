const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const app = express();
const cors = require('cors');

require("dotenv").config();
require("./config/database");

const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./route")(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
