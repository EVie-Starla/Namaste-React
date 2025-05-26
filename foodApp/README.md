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
