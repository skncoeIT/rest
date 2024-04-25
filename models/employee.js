const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name: String,
    designation: String
});

module.exports = mongoose.model("Employee", employee);