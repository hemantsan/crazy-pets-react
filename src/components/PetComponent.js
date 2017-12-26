import React, { Component } from 'react';

class PetComponent extends Component {

    constructor() {
        super();
        this.onBuyClick = this.onBuyClick.bind(this);
    }

    onBuyClick() {
        this.props.handleBuyClick(this.props.id);
    }

    render() {
        return(
            <div className="col-md-3" id={this.props.id}>
                <div className="card">
                    <img className="card-img-top" src={require('../images/pets/'+this.props.picture)} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">Age : {this.props.age} | Price : {this.props.price}</p>
                        <button className="btn btn-success" type="button" onClick={this.onBuyClick}> Buy </button>
                        <button className="btn btn-danger ml-2" type="button"> Wishlist</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetComponent;