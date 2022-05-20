const { Schema, model } = require('mongoose');

const skirtSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Skirt must have a price']
    },
    color: {
        type: String,
        required: [true, 'Skirt must have a color']
    },
    size: {
        type: Number,
        required: [true, 'Skirt must have a size']
    },
    madeIn: String
});

const Skirt = model('Skirt', skirtSchema);
module.exports = Skirt;