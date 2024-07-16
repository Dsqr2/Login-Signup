import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/",{
                email, password
            })
            .then(res => {
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist") {
                    alert("User have not sign up")
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
        <div className = "login">
            <div className="container">
                <h1>Login</h1>
                <form action = "POST">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" id=""/>

                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" id=""/>

                    <button type="login" className="btn btn-primary" onClick={submit}>Log in</button>
                </form>
                <p>OR</p>
                <p>Don't have an Account yet?</p><Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Login