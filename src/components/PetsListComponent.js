import React, { Component } from 'react';
import petsData from '../api/pets.json';
import PetComponent from './PetComponent';

class PetsListComponent extends Component {

    constructor() {
        super();
        const petsJsonData = petsData;
    }

    makeList() {
        var petListHtml = '';
        petListHtml = petsData.map(pet => {
            return(
                <PetComponent 
                    key={pet.id}
                    name={pet.name}
                    gender={pet.gender}
                    age={pet.age}
                    price={pet.price}
                    picture={pet.picture}
                />
            );
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