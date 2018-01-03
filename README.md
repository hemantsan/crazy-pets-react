# **crazy-pets-react**


### Setting up project

This project is based on create-react-app package which is available in npm. So first of all you must have NodeJs installed on your system. to install NodeJS go to [NodeJS website](https://nodejs.org/en/)

- Installing create-react-app globally : `npm install -g create-react-app`

-g flag installs a package globally means you can use this package from any directory on your system.

Now go to a directory and open up git bash/cmd/terminal (Linux or MacOS) and fire below command

- Creating project : `create-react-app your-project-name`

this command will create a folder and install all required dependancies for react app. And if needed you can install more later using `npm`.
Now enter in newly created directory

- `cd your-project-name`
- `npm start`

Now you can see your app running in browser at the default address http://localhost:3000/

Now remove `App.js, App.css, App.test.js, index.css` files. We will create our own files later.
Go into src folder and create a new folder that reads `components`.
And add one file named `MainComponent` in this folder and add below code in this

``` javascript
    import React, { Component } from 'react';

    class MainComponent extends Component {
        render() {
            return(
                <h1>Hello There !!</h1>
            );
        }
    }

    export default MainComponent;
```

This file imports `React` and `Component` from `react` package. And exports a default class `MainComponent`.

Now import this component in `index.js`. and hit refresh on your browser where your app is running. and see result.

---

### Editor Configuration

You can use any editor or IDE you like but i would recommend here VS Code. you can download it [here](https://code.visualstudio.com/) for your OS.
Now install below packages for better react, jsx, JS ES6 support

1. JS JSX Snippets
2. JavaScript (ES6)
3. Reactjs code snippets
4. vscode-styled-jsx

### Building App

1. Create a folder `api` in src
2. In `components` folder create below files
    * CartComponent.js
    * HeaderComponent.js
    * HomeComponent.js
    * MainComponent.js
    * PetComponent.js
    * PetsListComponent.js
    * WishlistComponent.js

3. import `css/site.css` in index.js

4. Edit `PetComponent.js`, in there we will put code related to the Pet card.

4. Edit `PetsListComponent.js`, in there we will put code which imports data from api/data.json and iterate array with PetComponent.

5. In `HomeComponent` now import `PetsListComponent` and run `npm start`.

6. Now we can see pet cards in home page.

7. Run `npm install react-router-dom`

8. Import `react-router-dom` in `index.js` 
    * `import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'`


#### Implementing Redux pattern
For implementing redux pattern in react install below dependencies : 

`npm install redux --save`
`npm install react-redux --save`

Then import below packages when using redux in a store
`import { createStore, combineReducers, appplyMiddleware } from 'redux';`

Import below package when connecting component with redux.
`import { connect } from 'react-redux';`

In index.js or entry point js import below package
`import { Provider } from 'react-redux';`

Now make 2 folders in src
1. actions
2. reducers

Actions trigger the specific reducer to do a task. Like ADD_NUMBERS action would trigger the same action in reducer and reducer would set the recieved value in state.

Reducers are combination of switch cases which recieve a value in each action and set it to state and update state.

- mapStateToProps : mapping states to props in component
- mapDispatchToProps : mapping dispatch/functions to props in component. Firing specific function/action on event call. Like providing `ADD_NUMBERS` action as props in component. And firing this action will trigger a switch case in reducer.

All the logic related code should be remained in component, only final value should be sent in reducer for updating state.


