import Password from "./Password";
import ReactDOM from "react-dom/client";

const AppLayout=()=>{
    return(
        <Password/>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)