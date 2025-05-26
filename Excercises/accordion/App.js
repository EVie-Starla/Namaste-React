import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./Accordion";

const AppLayout=()=>{
    const sections = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions and loops in JavaScript",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state and props in React",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js",
    },
    {
      title: "Full-Stack Development",
      content: "Build Full-stack apps with React and Node.js",
    }
  ];
    return(
        <Accordion sections={sections}/>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

