const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


const userRoute = require("./routes/userRoute");


mongoose.connect("mongodb://localhost:27017/loginsignup")

.then(() => {
    console.log("MongoDB Connected Succesfully at PORT");
})

.catch(() => {
    console.log("MongoDB Connection Failed");
})

app.listen(8000,() => {
    console.log("Port Connected");
})

app.use("/", userRoute);
