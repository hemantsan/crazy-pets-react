import React, { Component } from 'react';

class PetComponent extends Component {
    render() {
        return(
            <div className="col-md-3">
                <div className="card">
                    <img className="card-img-top" src={require('../images/pets/'+this.props.picture)} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">Age : {this.props.age} | Price : {this.props.price}</p>
                        <a href="#" className="btn btn-success"> <i className="fa fa-fa-shopping-cart"></i> Buy</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetComponent;