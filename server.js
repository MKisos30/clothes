require('dotenv').config;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('connect to mongoose');
    } catch (error) {
        console.log(error)
    }
}

app.use(express.json());


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {console.log(`Run on port ${PORT}`)});