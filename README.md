//It contains information about the project, dataset.it helps the user understand and how to use and contribute to the project
#NPM doesn't stand for Node Package Manager.But it does manages packages and it's a package manager.It's a repository for all packages. npm is used when we need to include any package in our code. All libraries and utilities that we need comes from it. when we create a react app using create-react-app which creates a react scaffold , it automatically has npm in it

********************\*\*\*\*********************JEST******************************\*\*\*\*******************************
#it's testing framework to write unit, integration and snapshot tests.
#Our project depend on so many packages and those packages are called dependecies.NPM manages the packages and takes care of its version and it's done in the package.json
********************\*\*********************package.json****************************\*\*****************************
It contains all the configuration details of npm
******************\*\*\*\*******************PACKAGES********************************\*\*********************************
webpack,parcel and vite are Bundlers used to bundle up all files in our project and shifts it to production.It can be installed as packages in our project.

# to install packages, npm install dependency(package)\_name

two types of dependencies can be used in our app.
1)dev dependencies 2)normal dependencies

//dev dependencies are used in development. Normal dependencies are used in production as well. Parcel is a dev dependency because it is used in development phase for code bundling or minimalization

//node modules contains all the code of all the dependencies we fetch from npm..it contains the actual data of dependencies or packages
// transitive dependencies--when we install parcel into our project using npm, it also installs the dependencies of parcel and dependencies of their dependencies and so on.

//.gitignore ignores the files which we dont want in our production and git.put node modules which contains packages in .gitignore

npx-node package execute

# parcel

- creates dev build for our project
- creates local server and port for our project
- does HMR(Hot Module Replacement). It refreshes the page automatically when there is a saved change in our code.It is done by file watching algorithm(written in c++) which is used by parcel.
- it also does caching to provide faster builds
- does image optimization
- does minification and bundles our code and compresses it
- does consistend hashing
- code splitting
- differential bundling --done to make our app run smoothly on older versions of browser and different types of browser
- error handling
  -diagnostics bts
  -hosts https
- tree shaking--removes unused codes
- creates differnet prod and dev builds
  ************************\*\*\*************************JSX********************************\*\*********************************
- JavaScript syntax which makes it easier to create React elements
- a mix of HTML and JS.
- in JSX, we can run any JavaScript expression or code inside {} braces
- JSX is the convention where we merge html and JS together
- JSX has an HTML-like or XML-like syntax
- JS engine does not understand JSX but parel-babel makes it possible by transpiling(coverting to a code that browsers and react can understand) our code before it gets te JS engine
- JSX gets converted to React.createElement=>creates React Element(JS Object)=>(render)ed as HTML element
- If writing JSX in multiple lines then using ‘()’ parenthesis is
  mandatory. To tell Babel from where JSX is starting and ending.
  ************************\*\*\*\*************************BABEL******************************\*\*******************************
- JS compiler
- it transpiles the ES6 code to a code that older browser understands
  ************************\*************************REACT********************************\*********************************
- lirarires(i.e, React) and frameworks merge things up(html, css and js) so that we can do the same thing in one file.
- If the react element or function has multiple lines of code, enclose it with round bracket
- react render mechanism works very fast and react has Virtual DOM , these make the react app very fast
  ************************\*************************COMPONENTS******************************\*******************************
- Everything in React is a component(footer, header,card of a webpage)
  -component name should be in PascalCase

# two types

1)Class based components(Old way of writing code)

- uses JS classes to write component

  2)Functional Components(New)

- uses JS functions to create components
- it is a JS function(arrow function is recommended) which returns a JSX element(=>react element)

*********************** React Angular Vue and other frameworks *************************
- make the UI layer and Data layer work in synk.(If the Data layer changes, the UI layer changes)
********************** state *******************
- state variable - Super Powerful variable (created with the help of hooks(usestate hook))
- scope of local state variable is within the componenet
*********************** HOOKS *******************
- Hooks are pre-built utility JS functions given by React
# Two most important hooks
1)useState() -- used to generate super powerful state variables in React
const [restaurants, setRestaurants]=useState(resList); //this is how we create state variable,set function is used to update or modify the list. useStase accepts a list as argument
// whenever a state variable gets changed or updated, React rerenders(updates) the component
//if setVariable is not used, the state variable never gets changed and remains constant
2)useEffect()-- accepts two arguments(1)callback function(2)dependency array..it is used for making api calls
- Callback function is getting called after the whole component get rendered.
- The dependency array changes the behavior of its render
- useEffect() is called once the component complete its render cycle.
- useEffect() is called for every render  if there is no dependency array.
- useEffect() is called only on initial render if there is an empty dependency array[].
- if we put something in the dependency array, it will  be called only when the dependency changes
- usecase: If we have to do something after the rendercycle complets we can pass it inside the useEffect(). It is really helpful to render data which we will get after the ‘ fetch() ' operation
-----------------------------------------------------
3)useCallback()--it memoizes(memoization is a performance optimization technique,the results of function calls are strored in cache so when the same input occurs again the precomputed result can be used instead of recalculating it) the expensive function(functions which take significant amount of time and resource) calls so that it doesn't get re-created for every render
******************************************* MONOLITHIC ARCHITECTURE *****************************************************
- it's a single, unified application where all its components(such as UI,Backend,DB,logic,etc)integrated and run as one service
- traditional way of building apps
- entire application uses the same techstack(if it's a Java application, everthing is written in java)
# Disadvantages:
- The size of the application is too large and it slows down the startup time of the application and it's complicated to understand
- Full deployment of the the application required even if there is a small update
- implementing continuous deployment is challenging
- It's hard to grasp the full impact of changes, leading to extensive manual testing.
- If there is a small bug in the application, the entire application could crash since it affects the entire application
- Adoption to new technolgies(changes in frameworks, libraries and languages) is expensive and time consuming
********************************************* MICROSERVICE ARCHITECTURE ***************************************************
- it follows SOC(seperation of concerns) and single-responsibility principles that is every part a program focuses on a specific task 
- Each service handles a specific job, like handling user accounts or managing payments.
-  Some services talk to each other over network in different ways,like using REST or messaging. Others might even have their own website!
# Communication Channels
These services interact with each other through various communication channels.
For instance, the UI microservice might need data from the backend microservice,
which in turn might need to access the database.
# Ports and Domain Mapping
Each microservice runs on its specific port. This means that different services
can be deployed independently, with each one assigned to a different port. All
these ports are then mapped to a domain name, providing a unified access point for
the entire application.
# Advantages:
- simple development--microservice breaks down complex applications to smaller and easier to handle services.it makes devement faster and maintenance easier
- Independent Teams- Each service is developed independently by a team focused on that specific task
- Scalability - Each service can be scaled independently
- It enables Continuous Deployment for complex applications
- It lets us choose the best technologies for each component
- Separation of Concerns: With each task having its own project, the architecture stays organized and manageable.
- Single Responsibility: Every service has its own job, following the principle of single responsibility. This ensures focused and efficient development.

************************************* TWO WAYS OF MAKING AN API CALL(To fetch and render the data) *******************************************
1)calling an api when page loads-->renders the api data on the page
2)page loads--> page is rendered -->API call is made-->rerenders the again with the API data(this approach is recommended)
***************************************************** fetch() *******************************************************************
-it is an API provided by browsers to make external calls(API calls)
-used to fetch APIs and returns promise object
# .json
- converts the fetch data to Javascript Object
*************************************************** CALLBACK FUNCTION ***************************************************
- useful for writing asynchronous code.
- this callback function will run once the component is rendered
************************* callback HELL/Pyramid of Doom and other issue with callback() *************************
- it does INVERSION OF CONTROL(hands over the control of the function we pass into it to APIs)
- CALLBACK HELL is NESTED CALLBACK FUNCTIONS.the code grows horizontally instead of vertically.it makes the code look messy and unreadable
*********************************************** Promise *************************************************
- think of it as an EMPTY OBJECT or PLACEHOLDER for a certain period of time until it receives a value from an asynchronous operation.MDN DEF-- object that represents the eventual completion or failure of asynchronous operations.
- promise can be resolved or rejected only once(this brings a lot of trust in the project)
- it is an immutable object
# Consuming promise
- is a process of handling the promise object that is returned by asynchronous operation.
# Creating promise
-new keyword along with Promise() constructor is used for creating a promise.Promise() accepts function that accepts two parameters (resolve,reject)
-resolve,reject are default js functions given by js to build promises.it's not something we pass in

# Error Handling inside promise
# 2 properties of Promise
1)promisestate
2)promiseresult--it holds the resolved value or error
# 3 states of Promise
1)pending -- initial state
2)fulfilled
3)rejected
# asynchronous operation
- operation that runs in the background that lets the program keep going without making it to wait till it gets completed.
# PROMISE CHAINING 
- promise feature that helps us AVOID CALLBACK HELL --it is implemented using .then() to attach callback functions with promise(the callback function gets called only once when the promise object gets filled with data from API call)
- it is used when we have to call many APIs which are dependent on each other and asynchronous in a sequence; we used to implement it using NESTED CALLBACK FUNCTIONS, we passed callback function to API and gave them control over it , these APIs are unreliable,it may call it more than once or may not call it
# Error handling
- .catch() is used to attach failure callback functions to a promise to throw an error if a promise is rejected
- .catch() handles the errors which happens before it and doesn't do anything for the errors that happen below(.then() functions that are before and after catch()), so then() functions after the catch() will be still called.
- error is created using Error() constructor
*************************************************** setTimeout *********************************************************
- it accepts two arguments-a function and delay time(E.g,1000(ms))
- is used for delaying the execution of a function.E.g, giving a moment to users when they submited a form before redirecting them by showing "Form submitted successfully"
*************************************************** async and await*************************************************
- async await is just a synctactic sugar over .catch() and .then()
- async keyword is used for creating async functions
- async functions always return a promise.Even if you return a value like boolean,string,numbers etc.,it will wrap that value inside a promise and return the promise
- await is used for handling promises inside async function like .then() and .catch() used to do tradiinally
- await can't be used outside async
- await keyword is used before the promise to handle it.
# Error Handling
- we use try{} and catch{} block.
- we wrap the async operation inside a try{} block and handle the error which you've captured inside try{} block inside theb catch()
- some people also use .catch() to handle errors by attaching it to the function
***************************************************.then() vs async await *************************************************
- when we use .then() while the asynchronous operation run in the backgroud, the next line in the piece of code gets executed.
- but when we use async or await,the function is removed from the callstack and js engine pauses till the aynchronous operation is completed to go to the next line of code in the piece of code a.once the operation is done , that's when the function comes to the callstack again to resume the execution where it paused.
*************************************************** Promise APIs *******************************************************
-Promise API are used when we do parallel API calls and when there are multiple promises involved
# Major Promise APIs
1)Promise.all()-it returns the value of all promises in an array once they all got resolved.If any one them fails, it just return the error of first promise that fails and doesn't wait for all promises to get settled
2)Promise.allSettled()-it returns the value of all promises in an array objects once they all are settled including the failed and resolved.
3)Promise.race()-it returns the value of promise which gets settled first whether it's resolved or rejected
4)Promise.any()-it returns the value of promise which gets resolved first and it just ignores the promises that gets rejected before it and returns the array of errors if all promises got rejected.
*************************************************** Optional Chaining *******************************************************
- JS feature(?) that lets you safely access deeply nested object properties without having to check each level manually.
- If any step is missing or undefined, the whole expression returns undefined without breaking.
*************************************************** Conditional Rendering ***************************************************
- refers to rendering based on condition
- conditional opertaor(&&) and if statement or ternary operator is used to do this
*************************************************** Shimmer UI *************************************************************
- is a like a placeholder(it mimics the layout of the page) while the page is loading for better UX
*************************************************** Statement Vs Expression in JS *************************************************************
# EXPRESSION
- is something that returns a value or produces result
- E.g, 2+2, "hello"+"world", x=5, myFuction()-it returns whatever the function returns
# STATEMENT
- is the complete instruction that does something
- E.g, console.log("hello"), function greet(){....}, return statement,if,for,while statements
*************************************************** CORS *********************************************************
- Cross Origin Resource Sharing policy prevents one domain from making API calls to another domain
************************************************ Routing **********************************************
-Creating multiple URL routs,Nested Routs, Creating multiple pages
*********************************************** react-router-dom ***********************************************
- React library for creating routes that represents the URLs in react
- Router does the rendering of components based on the URL.
# ProvideRouter
- is a component that react-router-dom provide
# createBrowserRouter
- we configure(provide info based on our need) this router using
- we provide routs and children routes here.
# children routes
- are components that can be pushed into the main component
# useRouteError
- hook provided by react-router-dom library.It helps us get more information about the error and show it to users
# Outlet
- is a component provided by react-router-dom library 
- it is used for rendering the child routes inside the Parent route
# Link
- is a component provided by react-router-dom library 
- link is used to refresh the component unlike <a> tag which reloads the entire page
- used to navigate between routes without reloading the page
*********************************************** SPA *********************************************************
- React is called single page application because even if we go to new route it doesn't reloads the entire page.Instead it just changes the component
*********************************** Two types of Routing in web apps *****************************************
- client side routing(we're doing this we're not making any network calls because when our page loads,it already has the codes for different routes)
- server side routing.(makes a network call-the page comes from the server)