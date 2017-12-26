import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';

class BrowsePetsComponent extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Pets</h1>
                    <h3>Browse Pets</h3>
                    <div className="row">
                        <PetsListComponent dataCount={"all"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowsePetsComponent;