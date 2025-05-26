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
  ************************\*************************COMPONENTS******************************\*******************************
- Everything in React is a component(footer, header,card of a webpage)
  -component name should be in PascalCase

# two types

1)Class based components(Old way of writing code)

- uses JS classes to write component

  2)Functional Components(New)

- uses JS functions to create components
- it is a JS function(arrow function is recommended) which returns a JSX element(=>react element)
