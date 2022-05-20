const { Schema, model } = require('mongoose');

const pantSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Pants must have a price']
    },
    color: {
        type: String,
        required: [true, 'Pants must have a color']
    },
    size: {
        type: Number,
        required: [true, 'Pants must have a size']
    },
    madeIn: String
});

const Pants = model('Pants', pantSchema);
module.exports = Pants;