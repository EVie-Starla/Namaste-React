//Header using Functional Component
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import pp from "./pp.jpg";

const root=ReactDOM.createRoot(document.getElementById("root"))

const Header=()=>(
  <div id="container">
    <img className="item1" src={logo} alt="Page logo"/>
    <div className="item2">
    <input id="search" className="item2-search" type="search"/>
    <input htmlFor="search" className="item2-button" type="button" value="search" />
    </div>
    <img className="item3" src={pp} alt="Profile-Picture" style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
    {console.log("Logo URL:", pp)}
    {console.log("Logo URL:", logo)}
  </div>
);

root.render(<Header/>);
