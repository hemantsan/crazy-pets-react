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