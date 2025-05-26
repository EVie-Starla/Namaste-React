import React from "react";
import ReactDOM from "react-dom/client";
import EvenOrOdd from "./EvenOrOdd";

const AppLayout=()=>{
    return(
        <EvenOrOdd/> 
    );  
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)