import React, { Component } from 'react';
import PetsListComponent from './PetsListComponent';
import { NavLink } from 'react-router-dom';
import petsData from '../api/pets.json';
import { connect } from 'react-redux';

class WishlistComponent extends Component {

    constructor(props) {
        super();
    }

    filterPetData() {
        const wishlistItems = this.props.wish.petId;
        const filterData = [];
        petsData.map((pet, index) => {
            if (wishlistItems.includes(pet.id)) {
                filterData.push(petsData[index]);
            }
        });
        return filterData.length !== 0 ? filterData : 0;
    }

    render() {
        const isCartFilled = this.filterPetData();
        var wishlistItem = '';
        if(isCartFilled !== 0) {
            wishlistItem = <PetsListComponent dataCount={"all"} listType="cart" petsData={isCartFilled}/>
        }
        else{
            wishlistItem = <div className="col-md-12 text-center">
                <p>Huh!! You don't love any pets.</p>
            </div>;
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Wishlist</h1>
                    <h3>Pets you love</h3>
                    <div className="row">
                        {wishlistItem}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wish: state.wishlistReducer
    };
};


export default connect(mapStateToProps)(WishlistComponent);