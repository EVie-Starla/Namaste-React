import ProgressBar from "./ProgressBar";
import ReactDOM from "react-dom/client"

const Applayout=()=>{
    return(
        <ProgressBar/>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)