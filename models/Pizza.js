const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String,
        required: 'You need to provide a pizza name!',
        trim: true
    },
    createdBy: {
        type: String,
        required: 'You need to provide a name!',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        required: true,
        enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
    //reduce() takes two parameters, an accumulator and a currentValue
    //walks through the array, it passes the accumulating total and the current value of comment 
    // into the function, with the return of the function revising the total for the next iteration through the array.
})

// creates the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//exports the Pizza model
module.exports = Pizza;