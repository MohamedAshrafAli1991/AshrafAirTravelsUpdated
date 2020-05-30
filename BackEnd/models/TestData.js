const mongoose = require('mongoose');

const TestDataSchema = new mongoose.Schema({
    customerName: String,
    customerId: String,
    date: Date,
    type: String,
    amount: Number,
    expense: Number,
    profit: Number,
    percentage: Number,
    status: String,
    isActive: Boolean,
    role: String,
    phone: String,
    document: String,
});

module.exports = TestData = new mongoose.model('TestData', TestDataSchema);