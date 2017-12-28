const cartReducer = (state = {
    petId: [],
    wishlistItemCount: 0
}, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            state = {
                ...state,
                petId: [...state.petId, action.payload],
            };
            state.wishlistItemCount = state.petId.length;
            console.log([...state.petId].length);
            break;
    }
    return state;
};

export default cartReducer;