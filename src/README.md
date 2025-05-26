//Data from backend comes to frontend in the form of JSON file

************************************* UI DRIVEN CONFIG ***********************************
- website is driven by data or configs. we don't build different websites for different locations. Instead of editing code or config files manually, we configure app behavior through user interface.
- We can change our UI based on the data that it gets from backend

********************************* DOM *********************************
- browser based API that represents the structure of HTML page as tree of nodes
- You can read and manipulate it using JavaScript (e.g., document.getElementById, element.innerHTML). 
******************************* VIRTUAL DOM *****************************
- in-memory copy of the real DOM, managed by React (or similar libraries)
- It's just a JavaScript object representation of what the DOM should look like.
- How it works:
      --> You write JSX.
      --> React builds a Virtual DOM tree from that JSX.
      --> When state or props change:
      --> React creates a new Virtual DOM tree.
      --> It compares the new tree to the previous one (using a diffing algorithm).
      --> It calculates the minimal set of changes.
      --> It applies those changes to the real DOM — efficiently.

***************** <React.Fragment></React.Frament>when we add props, key prop alone supported or <></> ****************
- its shorthand version <></>(without props) are both used in React to group a list of children elements without adding extra nodes like <div> and <span> to the DOM.

************************************** PROPS ****************************
- Properties(PROPS) can be passed to the component.If we want to dynamically pass some data to a component, it can be passed as a prop.At the EOD, PROPS are just arguments to (components)functions.PASSING A PROP TO A COMPONENT IS JUST LIKE PASSING AN ARGUMENT TO A FUNCTION
- React wraps these props into an JS object and pass it as props to react component

*************************************************************************
- USE ✅ JS FUNCTIONAL PROGRAMMING(map(),reduce(),filter()) for iterating over anything, not ❌for loops
********************** KEY ************************
- key is for code optimization.React doesn't uniquely identify the element without key and it will rerender everything if key wasn't provided.
-❌dont use index for Key

********************* IMPORT & EXPORT *******************
# Two ways to export
-1) export default component_name(By default, a file can export only one thing)
-2) named export(If you want to explode multiple things in a file)-- just type export before each item you want to export
- when you use named export, use {} braces to import the thing in another file

************************** Config.js or Common.js or Utils.js *************************

- Don't keep any hard coded strings inside the components.Keep them inside utils.js(common convention)