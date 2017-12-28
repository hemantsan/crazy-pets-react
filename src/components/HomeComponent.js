import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';
import petsData from '../api/pets.json';

class HomeComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    <h3>Popular Pets</h3>
                    <div className="row">
                        <PetsListComponent dataCount={4} listType="common" petsData={petsData}/>
                    </div>
                    <div className="row">
                        <hr/>
                        <div className="col-md-12">
                            <NavLink className="nav-link float-right" to={"/pets"}>Browse More Pets</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;