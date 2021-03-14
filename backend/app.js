const express = require("express");
const app = express();

require("dotenv").config();

require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./route")(app);

const port = process.env.PORT || 3030;
app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
