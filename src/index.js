import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import MainComponent from './components/MainComponent';
import HomeComponent from './components/HomeComponent';
import PetsListComponent from './components/PetsListComponent';
import CartComponent from './components/CartComponent';
import WishlistComponent from './components/WishlistComponent';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <Router>
                <MainComponent>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/home" component={HomeComponent}/>
                        <Route exact path="/pets" component={PetsListComponent}/>
                        <Route exact path="/cart" component={CartComponent}/>
                        <Route path="/wishlist" component={WishlistComponent}/>
                    </Switch>
                </MainComponent>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
