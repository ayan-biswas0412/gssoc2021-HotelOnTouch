const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const app = express();
const cors = require('cors');
var indexRouter=require("./route/index")
var sampleroute=require("./route/SampleRoute")
var menuItemRoute=require("./route/menuItemRouter")
var orderRoute=require("./route/orderRoute")

var userRouter=require("./route/user.route")

require("dotenv").config();
require("./config/database");

const port = process.env.PORT || 3030;

app.set('view engine', 'jade');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",indexRouter);;
app.use("/user",userRouter);
app.use("/menu",menuItemRoute)
app.use("/order",orderRoute);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
