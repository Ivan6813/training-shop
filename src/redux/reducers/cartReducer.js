import { ACTION_TYPES } from "../../constants/action-types";

const initialState = {
    order: [],
    deliveryFormData: null,
    paymentFormData: null,
    orderFormData: {},
    orderResponse: "",
    isLoadingResponse: false
};

function cartReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_ORDER:
            return {
                    ...state,
                    order: [...state.order, {...action.payload, quantity: 1}]
                };
        case ACTION_TYPES.REMOVE_ORDER:
            return {
                    ...state,
                    order: state.order.filter(item => item.id !== action.payload)
                };
        case ACTION_TYPES.INCREASE_QUANTITY:
            return {
                    ...state,
                    order: state.order.map(item => {
                        if(item.id === action.payload) {
                            return {
                                ...item, 
                                quantity: item.quantity + 1
                            };
                        }else return item;
                    })
            };
        case ACTION_TYPES.DECREASE_QUANTITY:
            return {
                    ...state,
                    order: state.order.map(item => {
                        if(item.id === action.payload) {
                            return {
                                ...item, 
                                quantity: (item.quantity === 1) ? 1 : item.quantity - 1
                            };
                        }else return item;
                    })
            };
        case ACTION_TYPES.SAVE_DELIVERY_FORM:
            return {...state, deliveryFormData: {...action.payload}};
        case ACTION_TYPES.SAVE_PAYMENT_FORM:
            return {...state, paymentFormData: {...action.payload}};
        case ACTION_TYPES.CLEAR_FORM_DATA:
            return {
                ...state, 
                orderFormData: {}, 
                deliveryFormData: null, 
                paymentFormData: null, 
                orderResponse: ""
            };
        case ACTION_TYPES.CLEAR_CART_ITEMS:
            return {...state, order: []};
        case ACTION_TYPES.ADD_ORDER_FORM_DATA:
            return {
                ...state, 
                orderFormData: {...state.orderFormData, ...action.payload}
            };
        case ACTION_TYPES.SEND_ORDER:
            return {
                ...state, 
                isLoadingResponse: true, 
                orderResponse: ""
            };
        case ACTION_TYPES.ORDER_RESPONSE:
            return {
                ...state, 
                orderResponse: action.payload, 
                isLoadingResponse: false
            };
        default:
            return state;
    }
}

export default cartReducer;