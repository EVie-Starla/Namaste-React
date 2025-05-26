import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom"

const Header=()=>{
    const [signInStatus, setSignInStatus]=useState("Sign In")
    return(<div className="header">
        <React.Fragment>
            <img className="logo" src={LOGO_URL}/>
        </React.Fragment>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">🛒 Cart</Link></li>
                <li><button onClick={()=>{signInStatus==="Sign In"?setSignInStatus("Log Out"):setSignInStatus("Sign In")}}>{signInStatus}</button></li>
            </ul>
        </div>
    </div>
);
};

export default Header;
