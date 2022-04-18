import {ACTION_TYPES} from "../../constants/action-types";

const initialState = {
    order: [],
    deliveryFormData: null,
    paymentFormData: null,
    orderFormData: {},
    orderResponse: "",
    isLoadingResponse: false,
    countries: [],
    cities: [],
    countriesRequestError: "",
    citiesRequestError: ""
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_ORDER:
            return {
                ...state,
                order: [...state.order, {...action.payload, quantity: 1}]
            };
        case ACTION_TYPES.REMOVE_ORDER:
            return {...state, order: action.payload};
        case ACTION_TYPES.INCREASE_QUANTITY:
            return {...state, order: action.payload};
        case ACTION_TYPES.DECREASE_QUANTITY:
            return {...state, order: action.payload};
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
            return {...state, isLoadingResponse: true, orderResponse: ""};
        case ACTION_TYPES.ORDER_RESPONSE:
            return {...state, orderResponse: action.payload, isLoadingResponse: false};
        case ACTION_TYPES.GET_COUNTRIES:
            return {...state, countriesRequestError: ""};
        case ACTION_TYPES.GET_CITIES:
            return {...state, citiesRequestError: ""};
        case ACTION_TYPES.SET_COUNTRIES:
            return {...state, countries: [...action.payload]};
        case ACTION_TYPES.SET_CITIES:
            return {...state, cities: [...action.payload]};
        case ACTION_TYPES.CLEAR_CITIES:
            return {...state, cities: [], citiesRequestError: ""};
        case ACTION_TYPES.COUNTRIES_REQUEST_ERROR:
            return {...state, countriesRequestError: action.payload};
        case ACTION_TYPES.CITIES_REQUEST_ERROR:
            return {...state, citiesRequestError: action.payload};
        default:
            return state;
    }
};

export default cartReducer;