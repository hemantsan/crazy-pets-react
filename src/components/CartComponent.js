import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';
import petsData from '../api/pets.json';
import { connect } from 'react-redux';
import { checkout } from '../actions/cartActions.js';

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
            CartItem = <div className="row"><PetsListComponent dataCount={"all"} listType="cart" petsData={isCartFilled}></PetsListComponent>
                <div className="col-md-12">
                    <button className="btn btn-warning btn-lg float-right" onClick={() => this.props.checkout('')}>Checkout</button>
                </div></div>;
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
                    {/* <div className="row"> */}
                        {CartItem}
                    {/* </div> */}
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

const mapDispatchToProps = (dispath) => {
    return {
        checkout: (petArray) => {
            dispath(checkout(petArray));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);