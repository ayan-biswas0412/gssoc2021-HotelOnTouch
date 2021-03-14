const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config();
const port = process.env.PORT || 3030;

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "HotelOnTouch API",
        version: "1.0.0",
    },
    servers: [
        {
            url: `http://localhost:${port}`,
            description: "Development server",
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./route/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
