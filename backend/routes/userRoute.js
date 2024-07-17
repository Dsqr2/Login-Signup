const express = require("express")
const collection = require("../models/model"); 
const cors = require("cors");
const router = express.Router();

// router.get("/",cors(),(req,res) => {

// })

// Login Post
router.post("/login", async(req,res) => {
    const{email,password} = req.body;
    
    const data={
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({email: email});
        const checkPass = await collection.findOne({password: password});
        
        if(check) {
            if(checkPass){
                res.json("exist");
            }
            else{
                res.json("wrongpassword");
            }
        }
        else {
            res.json("notexist");
        }
    }

    catch(e) {
        res.json("Not Exist");
    }
})

// Signup Post
router.post("/signup", async(req,res) => {
    const{email,password,confirmpassword} = req.body;

    const data = {
        email: email,
        password: password,
        confirmpassword: confirmpassword
    }

    try {
        const check = await collection.findOne({email: email});
        
        if(check) {
            res.json("exist");
        }
        else {
            res.json("notexist");
            await collection.insertMany([data])
        }
    }

    catch(e) {
        res.json("Not Exist");
    }
})

module.exports = router;