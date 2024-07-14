const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state = initialState, action) => {
    let updatedState;
    switch(action.type) {
        case 'ADD_TO_CART':
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                updatedState = state.map((item) =>
                    item.id === action.payload.id ? {...item, qnty: item.qnty + 1} : item
                );
            } else {
                updatedState = [
                    ...state,
                    action.payload
                ];
            }
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;

        case 'REMOVE_FOOD':
            updatedState = state.filter((item)=>item.id!==action.payload)
            localStorage.setItem('cart',JSON.stringify(updatedState))
            return updatedState

        case 'INCREMENT_QUANTITY':
            updatedState = state.map((item)=>
                item.id == action.payload ?  {...item,qnty : item.qnty+1}
                : item
            )
            localStorage.setItem('cart',JSON.stringify(updatedState))
            return updatedState

        case 'DECREMENT_QUANTITY':
            updatedState = state.map((item)=>
                item.id == action.payload ? {...item, qnty : item.qnty > 0 ? item.qnty-1 : 0 } 
                : item
            ).filter((item)=>item.qnty!=0)

            localStorage.setItem('cart',JSON.stringify(updatedState))
            return updatedState


        default:
            return state;
    }
}

export default cartReducer;
