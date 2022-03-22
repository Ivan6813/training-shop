import { ACTION_TYPES } from "../../constants/action-types";

const initialState = {
    order: []
};

function cartReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_ORDER:
            return {...state, order: [...state.order, {...action.payload, quantity: 1}]};
        case ACTION_TYPES.REMOVE_ORDER:
            return {...state, order: state.order.filter(item => item.id !== action.payload)};
        case ACTION_TYPES.INCREASE_QUANTITY:
            return {...state, order: state.order.map(item => {
                if(item.id === action.payload){
                   return {...item, quantity: item.quantity + 1};
                }else return item;
            })};
        case ACTION_TYPES.DECREASE_QUANTITY:
                return {...state, order: state.order.map(item => {
                    if(item.id === action.payload){
                       return {...item, quantity: (item.quantity === 1) ? 1 : item.quantity - 1};
                    }else return item;
                })};
        default:
            return state;
    }
}

export default cartReducer;