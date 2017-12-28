import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';
import petsData from '../api/pets.json';
import { connect } from 'react-redux';

class CartComponent extends Component {

    constructor(props) {
        super();
    }

    filterPetData() {
        const cartItems = this.props.cart.petId;
        const filterData = [];
        petsData.map((pet, index) => {
            if (cartItems.includes(pet.id)) {
                filterData.push(petsData[index]);
            }
        });
        return filterData.length !== 0 ? filterData : 0;
    }

    render() {
        const isCartFilled = this.filterPetData();
        var CartItem = '';
        if(isCartFilled !== 0) {
            CartItem = <PetsListComponent dataCount={"all"} listType="cart" petsData={isCartFilled}/>
        }
        else{
            CartItem = <div className="col-md-12 text-center">
                <p>No pets added into cart.  :(</p>
            </div>;
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Cart</h1>
                    <h3>Ready To Buy</h3>
                    <div className="row">
                        {CartItem}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    };
};

export default connect(mapStateToProps)(CartComponent);