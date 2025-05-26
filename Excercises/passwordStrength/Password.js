import { useState } from "react";

const Password=()=>{
    const[password,setPassword]=useState("");
    const[strength,setStrength]=useState([]);
    const[Checked, setChecked]=useState(false)
    const checkPasswordStrength=(pwd)=>{
        const checks=[
            pwd.length>=8?true:"8 characters",
            /[A-Z]/.test(pwd)?true:"1 Upper-case letter",
            /[a-z]/.test(pwd)?true:"1 Lower-case letter",
            /[0-9]/.test(pwd)?true:"1 number",
            /[^A-Za-z0-9]/.test(pwd)?true:"1 special character"
        ]
        console.log(checks) 
        return checks.filter(item=>item===true).length===5?true:checks.filter(item=>typeof item==='string'); 
    }
    const handleCheck=()=>{
        setStrength(checkPasswordStrength(password));
        setChecked(true)
    }
    return(
        <div className="container">
            <h2>Password Strength Checker</h2>
            <div className="password-container">
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleCheck}>Check Strength</button>
            </div>
            {Checked&&(
                strength===true?<p className="pwd-fulfill">Password requirement fulfilled</p>:
                (<ul className="pwd-requirement-list">
                <h5>Your password must include at least</h5>
                {strength.map((item,index)=><li className="pwd-requirement" key={index}>{item}</li>)}
                </ul>)
            )
            }    
        </div>
    );
}

export default Password;