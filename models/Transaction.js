const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    purchaserId: {
        type: Number,
        required: true
    },
    sellerId: {
        type: Number,
        required: true
    },
    itemId: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    fee: {
        type: Number,
        required: true,
        min: [0, 'Transaction fee cannot be negative']
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);