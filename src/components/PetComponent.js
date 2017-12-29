import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetComponent extends Component {

    constructor() {
        super();
        this.onBuyClick = this.onBuyClick.bind(this);
        this.onWishlistClick = this.onWishlistClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onBuyClick() {
        const selectedPet = this.props.id;
        const isInCart = this.props.cart.petId.indexOf(selectedPet);
        (isInCart !== 0 ?
            this.props.handleBuyClick(selectedPet) :
            alert('Pet is already in cart.')
        );
    }

    onWishlistClick() {
        const selectedPet = this.props.id;
        const isInCart = this.props.wish.petId.indexOf(selectedPet);
        (isInCart !== 0 ?
            this.props.handleWishlistClick(selectedPet) :
            alert('Pet is already in wishlist.')
        );
    }

    onRemoveClick() {
        const selectedPet = this.props.id;
        var listType = this.props.listType;
        var selectedPetData = (this.props.listType === "cart" ? this.props.cart.petId : this.props.wish.petId);
        var petIndex = selectedPetData.filter((pet, index) => {
            return pet !== selectedPet;
        });
        // var modifiedPetData =  this.props.cart.petId.filter(return petIndex 1);
        console.log('----->>>', petIndex);
        this.props.handleRemoveClick(petIndex, listType);
    }

    render() {
        if (this.props.listType == 'common') {
            return (
                <div className="col-md-3" id={this.props.id}>
                    <div className="card">
                        <img className="card-img-top" src={require('../images/pets/' + this.props.picture)} alt="Pet pic" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.name}</h4>
                            <p className="card-text">Age : {this.props.age} | Price : {this.props.price}</p>
                            <button className="btn btn-success" type="button" onClick={this.onBuyClick}> Buy </button>
                            <button className="btn btn-danger ml-2" type="button" onClick={this.onWishlistClick}> Wishlist</button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-3" id={this.props.id}>
                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <img className="card-img-top" src={require('../images/pets/' + this.props.picture)} alt="Pet pic" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.name}</h4>
                            <p className="card-text">Age : {this.props.age} | Price : {this.props.price}</p>
                        </div>
                        <div className="card-footer text-muted">
                            <button className="btn btn-primary" type="button" onClick={this.onRemoveClick}> Remove </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer,
        wish: state.wishlistReducer,
    };
};


export default connect(mapStateToProps)(PetComponent);