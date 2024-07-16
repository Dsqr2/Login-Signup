const express = require("express")
const collection = require("./mongo"); 
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get("/",cors(),(req,res) => {

})

// Login Post
app.post("/", async(req,res) => {
    const{email,password} = req.body;

    try {
        const check = await collection.findOne({email: email});

        if(check) {
            res.json("exist");
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
app.post("/signup", async(req,res) => {
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

app.listen(8000,() => {
    console.log("Port Connected");
})