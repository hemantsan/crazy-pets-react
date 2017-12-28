import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';
import petsData from '../api/pets.json';

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
                        <PetsListComponent dataCount={"all"} listType="common" petsData={petsData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowsePetsComponent;