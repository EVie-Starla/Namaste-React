import { useState } from "react";

const ProgressBar=()=>{
    const [progress, setProgress]=useState(0);
    const handleIncrease=()=>setProgress(prev=>Math.min(prev+10,100));
    const handleDecrease=()=>setProgress(prev=>Math.max(prev-10,0))
    const progressBarColor=()=>{
        if(progress<30) return "red";
        else if(progress<70) return "orange"
        return "green"
    }

    const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;
    return(
        <div className="container">
        <h1>ProgressBar</h1>    
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width:`${progress}%`, backgroundColor:progressBarColor()}}></div>
            <h3 className="progress-bar-text">{progress}%</h3>
        </div>
        <svg
        height={radius *2}
        width={radius *2}
        className="circular-progress"
      >
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <circle
          stroke={progressBarColor()}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="progress-text"
        >
          {progress}%
        </text>
      </svg>

        <div className="buttons">
                <button className="decrease-btn" onClick={handleDecrease}>-10</button>
                <button className="increase-btn" onClick={handleIncrease}>+10</button>
        </div>
        </div>
    );
}
export default ProgressBar;