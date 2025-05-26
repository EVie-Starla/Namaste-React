import { useState } from "react";

const EvenOrOdd = () => {
    const [searchText, setSearchText]=useState("");
    const [message,setMessage]=useState("")
    const CheckOddOrEven=()=>{
      setMessage("Checking...")
      setTimeout(()=>{
        const number=parseInt(searchText);
        if (isNaN(number))
           return setMessage("Enter a valid number")
    return searchText%2===0?setMessage(`The number ${number} is Even.`):setMessage(`The number ${number} is odd.`)
    },1000)  
    }
  return (
    <div className="container">
      <h2>Even or Odd Checker</h2>
      <input className="user-input" placeholder="Enter a number" value={searchText} onChange={e=>setSearchText(e.target.value)}></input>
      <button className="check-btn" onClick={CheckOddOrEven}>Check</button>
      <label className="message">{message}</label>
    </div>
  );
};
export default EvenOrOdd;
