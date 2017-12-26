import React, { Component } from 'react';
import petsData from '../api/pets.json';
import PetComponent from './PetComponent';

class PetsListComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            petDataCount: (props.dataCount === "all" ? Object.keys(petsData).length : props.dataCount)
        }
    }

    handleBuyClick(petId) {
        alert("Pet id : " + petId);
    }

    makeList() {
        var petListHtml = '';
        petListHtml = petsData.map((pet, index) => {            
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
                        handleBuyClick={this.handleBuyClick}
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

export default PetsListComponent;