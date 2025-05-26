import { useState, useCallback } from "react";
const useToggle=(initialValue=false)=>{
    const [toggleValue,setToggleValue]=useState(initialValue)
    const toggle=useCallback(()=>{
        setToggleValue(prev=>!prev);
    },[])
    return [toggleValue,toggle];
}

export default useToggle;