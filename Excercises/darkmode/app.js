import ReactDOM from "react-dom/client";
import DarkMode from "./DarkMode";
const AppLayout=()=>{
    return(
        <DarkMode/>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)