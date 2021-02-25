const mongoose = require('mongoose');
require('dotenv').config();

const connection = process.env.DB_STRING || "mongodb://localhost/hotelontouchdb";

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected');
},  { useFindAndModify: false });
