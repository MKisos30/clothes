require('dotenv').config;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

const mongooseConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, () => {
            console.log('connect to mongoose');
        })
    } catch (error) {
        console.log(error)
    }
}
mongooseConnect();

app.use(express.json());

app.use('/', require('./routes/jackets'));
app.use('/', require('./routes/pants'));
app.use('/', require('./routes/shirts'));
app.use('/', require('./routes/shoes'));
app.use('/', require('./routes/skirts'));


app.listen(PORT, () => {
    console.log(`Run on port ${PORT}`)
});