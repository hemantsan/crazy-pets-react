export function addToCart(petId) {
    return {
        type: "ADD_TO_CART",
        payload: petId
    }
}

export function removeFromCart(petId) {
    return {
        type: "REMOVE_FROM_CART",
        payload: petId
    }
}

export function checkout(petArray) {
    return {
        type: "CHECKOUT",
        payload: petArray
    }
}