import { ACTION_TYPES } from "../../constants/action-types";

const initialState = {
    products: {},
    product: {},
    productsCategory: [],
    isLoading: false,
    isError: false,
};

function productsReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_PRODUCTS:
            return {...state, isLoading: true, isError: false};
        case ACTION_TYPES.GET_PRODUCT:
            return {...state, isLoading: true, isError: false};
        case ACTION_TYPES.GET_PRODUCTS_CATEGORY:
            return {...state, isLoading: true, isError: false};
        case ACTION_TYPES.SET_PRODUCTS:
            return {...state, products: {...state.products, ...action.payload}, isLoading: false};
        case ACTION_TYPES.SET_PRODUCT:
            return {...state, product: {...action.payload}, isLoading: false};
        case ACTION_TYPES.SET_PRODUCTS_CATEGORY:
            return {...state, productsCategory: [...action.payload], isLoading: false};
        case ACTION_TYPES.ERROR_REQUEST:
            return {...state, isLoading: false, isError: true};
        default:
            return state;
    }
}

export default productsReducer;