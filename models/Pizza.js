const { Schema, model } = require('mongoose');

const PizzSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// creates the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzSchema);

//exports the Pizza model
model.exports = Pizza;