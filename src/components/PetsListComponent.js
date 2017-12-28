import React, { Component } from 'react';
import PetComponent from './PetComponent';

import { addToCart } from '../actions/cartActions';
import { addToWishlist } from '../actions/wishlistActions';
import { removeFromCart } from '../actions/cartActions';
import { connect } from 'react-redux';

class PetsListComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            petDataCount: (props.dataCount === "all" ? Object.keys(props.petsData).length : props.dataCount)
        }
    }

    handleBuyClick(petId) {
        alert("Pet id : " + petId);
    }
    
    handleWishlistClick(petId) {
        alert("Pet id : " + petId);
    }

    makeList() {
        var petListHtml = '';
        petListHtml = this.props.petsData.map((pet, index) => {            
            if (this.state.petDataCount > index) {
                return(
                    <PetComponent 
                        id={pet.id}
                        key={pet.id}
                        name={pet.name}
                        gender={pet.gender}
                        age={pet.age}
                        price={pet.price}
                        picture={pet.picture}
                        handleBuyClick={this.props.addToCart}
                        handleWishlistClick={this.props.addToWishlist}
                        handleRemoveClick={this.props.removeFromCart}
                        listType={this.props.listType}
                    />
                );
            }
        });
        return petListHtml;
    }
    
    render() {
        return(
            this.makeList()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer,
        wish: state.wishlistReducer,
    };
};

const mapDispatchToProps = (dispath) => {
    return {
        addToCart: (petId) => {
            dispath(addToCart(petId));
        },
        addToWishlist: (petId) => {
            dispath(addToWishlist(petId));
        },
        removeFromCart: (petData) => {
            dispath(removeFromCart(petData))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsListComponent);