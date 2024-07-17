import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    async function submit(e) {
        
        e.preventDefault();

        if(password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await axios.post("http://localhost:8000/signup",{
                email, password, confirmpassword
            })
            .then(res => {
                if(res.data === "exist"){
                    alert(`${email} Already have an Account`);
                }
                else if(res.data === "notexist") {
                    history("/home",{state:{id:email}});
                }
            })
            .catch(e => {
                alert("Wrong Details");
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }


    return (
        <div className = "signup">
            <div className="container">
                <h1>Signup</h1>
                <form action = "POST">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" id=""/>

                    <label for="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" id=""/>

                    <label for="InputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Enter Confirm Password" id=""/>

                    <button type="signup" className="btn btn-primary" onClick={submit}>Sign up</button>
                </form>
                <p>OR</p>
                <p>Already have an account?</p><Link to="/">Login</Link>
            </div>
        </div>
    )
}

export default Signup