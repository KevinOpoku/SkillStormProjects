const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
require('dotenv').config();


const app = express(); //This will be used to start the express server
const PORT = process.env.PORT;  //retrieve port number from .env file
app.use(express.json());
app.use(logger); 


//Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log("MongoDB connection online.")
    })


//starts server
app.listen(PORT, () => { 
    console.log(`Server up and running on port ${PORT}.`)
});