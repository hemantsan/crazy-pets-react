export function addToWishlist(petId) {
    return {
        type: "ADD_TO_WISHLIST",
        payload: petId
    };
}

export function removeFromWishlist(petId) {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: petId
    }
}