import React from "react";
import ReactDOM from "react-dom/client";
import GuessNumber from "./GuessNumber";
const AppLayout=()=>{
    return(<GuessNumber/>);
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);