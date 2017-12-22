import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import SiteCSS from '../css/site.scss';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
                <NavLink className="navbar-brand" to={"/"}>
                    <img src={require('../images/logo.png')} alt="Crazy Pets Online" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/home"}>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/pets"}>Pets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart <i className="fa fa-fa-shopping-cart"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/wishlist"}>Wishlist</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;