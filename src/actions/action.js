export const addToCart = (item) =>{
    return {
        type : 'ADD_TO_CART',
        payload : item
    }
}

export const removeItem = (id) =>{
    return {
        type : 'REMOVE_FOOD',
        payload : id
    }
}

export const incrementQuantity = (id) =>{
    return {
        type : 'INCREMENT_QUANTITY',
        payload : id
    }
}

export const decrementQuantity = (id) =>{
    return {
        type : 'DECREMENT_QUANTITY',
        payload : id
    }
}