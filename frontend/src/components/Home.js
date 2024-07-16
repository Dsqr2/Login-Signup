import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home () {

    const location = useLocation();
    const history = useNavigate();

    function submit(e) {
        history("/");
    }
    
    return (
        <div className="homepage"> 
            <h1>Hello,<span className="span-class">{location.state.id}!</span> Welcome to the Home </h1>
            <button type="logout" className="btn btn-primary custom-btn" onClick={submit}>Log out</button>
        </div>
        
    )
}

export default Home;