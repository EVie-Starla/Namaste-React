//Nested React Elements
const parent=React.createElement(
    "div",
    {id:"parenrt"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement(//Array of Children to create siblings structure of elements
            "h1",
            {},
            "I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'M AN H1 TAG"),
         React.createElement("h2",{},"I'M AN H2 TAG")   
        ]
    )])


//React Element,JS Object
const greeting =React.createElement("h1",{
    id:"heading",//Object of attributes of react
    xyz:"abc"
},"Hello World!")//Children of react.Object of attributes and childern together called Props.

//console.log(heading)//displays an object on developer console

const root=ReactDOM.createRoot(document.getElementById("root"))//Root element is where we render the react element.

// root.render(heading)//This render() method renders the react element as an html element

const root2=ReactDOM.createRoot(document.getElementById("header"))
console.log(parent)
root.render(parent)
root2.render(greeting)
//this code looks messy.JSX maskes it easier to create html tags

