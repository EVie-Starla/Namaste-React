//It contains information about the project, dataset.it helps the user understand and how to use and contribute to the project

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
