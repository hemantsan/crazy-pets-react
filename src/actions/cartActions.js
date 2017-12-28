export function addToCart(petId) {
    return {
        type: "ADD_TO_CART",
        payload: petId
    };
}