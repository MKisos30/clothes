const { Schema, model } = require('mongoose');

const shoesSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Shoes must have a price']
    },
    color: {
        type: String,
        required: [true, 'Shoes must have a color']
    },
    size: {
        type: Number,
        required: [true, 'Shoes must have a size']
    },
    madeIn: String
});

const Shoes = model('Shoes', shoesSchema);
module.exports = Shoes;