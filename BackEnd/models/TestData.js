const mongoose = require('mongoose');

const TestDataSchema = new mongoose.Schema({
    CustomerName: String,
    CustomerId: String,
    Date: Date,
    Type: String,
    Amount: Number,
    Expense: Number,
    Profit: Number,
    Percentage: Number,
    Status: String,
    IsActive: Boolean,
    Role: String,
    Phone: String
});

module.exports = TestData = new mongoose.model('TestData', TestDataSchema);