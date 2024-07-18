const express = require("express")
const collection = require("../models/model"); 
const bcrypt = require("bcryptjs");
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
        const user = await collection.findOne({ email });

        if (!user) {
            return res.json("notexist");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json("wrongpassword");
        }

        res.json("exist");
    }

    catch(e) {
        res.json("Not Exist");
    }
})

// Signup Post
router.post("/signup", async(req,res) => {
    const{email,password,confirmpassword} = req.body;


    try {
        const user = await collection.findOne({ email });

        // Hash the Password
        const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new collection({
                email,
                password: hashedPassword
            });

        if (!user) {
            
            await newUser.save();
            res.json("notexist");
        }
        else {
            res.json("exist");
            
        }
    } catch (e) {
        res.json("");
    }
})

module.exports = router;