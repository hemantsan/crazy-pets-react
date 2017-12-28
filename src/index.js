import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import MainComponent from './components/MainComponent';
import HomeComponent from './components/HomeComponent';
import PetsListComponent from './components/PetsListComponent';
import CartComponent from './components/CartComponent';
import WishlistComponent from './components/WishlistComponent';
import BrowsePetsComponent from './components/BrowsePetsComponent';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import store from './store';

import './css/site.css';

class App extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <MainComponent>
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <HomeComponent />
                        )}/>
                        <Route exact path="/home" component={HomeComponent}/>
                        <Route exact path="/pets" component={BrowsePetsComponent}/>
                        <Route exact path="/cart" component={CartComponent}/>
                        <Route path="/wishlist" component={WishlistComponent}/>
                    </Switch>
                </MainComponent>
            </Router>
        );
    }
}

store.subscribe(() => {
    console.log("Store Updated : ", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
