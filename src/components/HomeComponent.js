import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';

class HomeComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    <h3>Popular Pets</h3>
                    <div className="row">
                        <PetsListComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;