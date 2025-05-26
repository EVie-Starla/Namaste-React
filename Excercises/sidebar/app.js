import Sidebar from "../sidebar/sidebar";
import ReactDOM from "react-dom/client";
const AppLayout=()=>{
    return(
        <Sidebar/>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)