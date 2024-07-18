const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an Email']
    },
    password: {
        type: String,
        required: [true, 'Please add a Password']
    }
})


const collection = mongoose.model("users",userSchema);
module.exports = collection;