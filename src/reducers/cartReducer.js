const cartReducer = (state = {
    petId: [],
    cartItemCount: 0
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state = {
                ...state,
                petId: [...state.petId, action.payload],
            };
            state.cartItemCount = state.petId.length;
            console.log([...state.petId].length);
            break;
    }
    return state;
};

export default cartReducer;