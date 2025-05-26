import { useEffect, useState } from "react";

const DarkMode=()=>{
  const [mode,setMode]=useState(false)
  // useEffect(()=>{
  //   document.body.className=mode?"dark-mode":"light-mode"
  // },[mode]);
  const toggleMode=()=>{setMode(prev=>!prev)};
     return(
        <div className={`container ${mode?"dark-mode":"light-mode"}`}>
        <h1>Dark Mode Toggle</h1>
        <div className="toggle-container">   
        <label className="switch">
          <input type="checkbox" checked={mode} onChange={toggleMode}/>
          <span className="toggle-knob"></span>
        </label>
        <span className="mode-text">{mode?"Dark Mode":"Light Mode"}</span>
        </div> 
        </div>
     );
}

export default DarkMode;