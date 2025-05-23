import React from "react";
import ReactDOM from "react-dom/client"

//Nested React Elements
const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1",key:"child1"},
        [React.createElement(//Array of Children to create siblings structure of elements
            "h1",
            {key:"h1-1"},
            "I'm an h1 tag"),
        React.createElement("h2",{key:"h2-1"},"I'm an h2 tag")]),
    React.createElement("div",{id:"child2",key:"child2"},
        [React.createElement("h1",{key:"h1-2"},"I'M AN H1 TAG"),
         React.createElement("h2",{key:"h2-2"},"I'M AN H2 TAG")   
        ]
    )])


//React Element,JS Object
const greeting =React.createElement("h1",{
    id:"heading",//Object of attributes of react
    xyz:"abc"
},"Hello World!")//Children of react.Object of attributes and childern together called Props.

//JSX
//attributes are written in camelCase in JSX
const reactElement=<span>❤❤❤</span>
const jsxHeading =<h1 id="greet" className="greeting" tabIndex="5">Hello{reactElement} From Namaste React!🚀</h1> ;//JSX


//console.log(heading)//displays an object on developer console

const root=ReactDOM.createRoot(document.getElementById("root"))//Root element is where we render the react element.

// root.render(heading)//This render() method renders the react element as an html element

const root2=ReactDOM.createRoot(document.getElementById("header"))
console.log(parent)
// root.render(parent)
root.render(greeting)
//this code looks messy.JSX maskes it easier to create html tags


console.log(jsxHeading);
// root2.render(jsxHeading);

const HeadingComponent=()=><h1>This is functional component</h1>
//it can also have nested JSX elements
const HeadingComponent2=()=>(
    <div id="container">
        <HeadingComponent/> {/* This is how we render a ReactComponent inside a ReactComponent.It's called component composition*/}
        <h1 className="heading">This is same as the above functional component💕</h1>
    </div>
);

const jsInsideJsx="Running JS expression inside JSX"
const num=67;
const HeadingComponent3=function(){
    return(
    <div><HeadingComponent2/>
    <h2>{jsInsideJsx}</h2>
    {num}
    <h2>{100%2}</h2>
    {console.log("Running JS inside JSX")}
    {parent}{/*reactElement(is also a JS Variable) inside ReactComponent*/}
    <h1>This is a ReactComponent that contains nested JSX elements</h1>
    {jsxHeading}
    </div>
    );
};

root2.render(<HeadingComponent3/>);//this is how ReactComponent is rendered inside DOM




