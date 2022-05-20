const { Schema, model } = require('mongoose');

const shirtSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Shirts must have a price']
    },
    color: {
        type: String,
        required: [true, 'Shirts must have a color']
    },
    size: {
        type: Number,
        required: [true, 'Shirts must have a size']
    },
    madeIn: String
});

const Shirts = model('Shirts', shirtSchema);
module.exports = Shirts;