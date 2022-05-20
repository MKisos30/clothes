const { Schema, model } = require('mongoose');

const jacketSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Jacket must have a price']
    },
    color: {
        type: String,
        required: [true, 'Jacket must have a color']
    },
    size: {
        type: Number,
        required: [true, 'Jacket must have a size']
    },
    madeIn: String
});

const Jackets = model('Jacket', jacketSchema);
module.exports = Jackets;