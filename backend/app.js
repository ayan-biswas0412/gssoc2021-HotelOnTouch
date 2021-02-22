const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("This is the main get route")
})

const port = process.env.PORT || 3030;
app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
