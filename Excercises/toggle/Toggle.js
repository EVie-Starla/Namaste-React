import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {Eye, EyeOff} from "lucide-react";
const Toggle=()=>{
    const [showPassword, setShowPassword]= useState(false);
    const togglePassword =()=>{setShowPassword(prev=>!prev)}
    return(
        <>
        <form className="password-container">
            <input data-testid="password-input" id="password" type={showPassword?'text':'password'} className='password-input' placeholder='Enter password'></input>
            <label data-testid="visibility-label" htmlFor="password" className='password-message'>{showPassword?"Password Visible":"Password Hidden"}</label>
        </form>
        {/* <FontAwesomeIcon data-testid="toggle-icon" icon={showPassword?faEye:faEyeSlash} className="password-toggle-icon" onClick={togglePassword}/> */}
        <span data-testid="toggle-icon" className="password-toggle-icon" onClick={togglePassword}>{showPassword?<Eye size={20}/>:<EyeOff size={20}/>}</span>
        </>
    )
}
export default Toggle;
