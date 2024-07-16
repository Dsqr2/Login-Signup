const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginsignup")

.then(() => {
    console.log("MongoDB Connected Succesfully at PORT");
})

.catch(() => {
    console.log("MongoDB Connection Failed");
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an Email']
    },
    password: {
        type: String,
        required: [true, 'Please add a Password']
    },
    confirmpassword: {
        type: String,
        required: true
    }
})


const collection = mongoose.model("collection",userSchema);
module.exports = collection;