import React from "react";
import ReactDOM from "react-dom/client";
import Toggle from "./Toggle";

const AppLayout=()=>{
    return(
    <>
    <h2>Password Toggle</h2>
    <Toggle/>
    </>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
