export function addToWishlist(petId) {
    return {
        type: "ADD_TO_WISHLIST",
        payload: petId
    };
}