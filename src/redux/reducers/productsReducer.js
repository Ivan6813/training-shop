import {ACTION_TYPES} from "../../constants/action-types";

const initialState = {
    products: {
        women: [],
        men:[]
    },
    isLoading: false,
    isError: false,
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ACTION_TYPES.SET_PRODUCTS:
            return {
                ...state, 
                products: {
                    women: [...action.payload.women], 
                    men: [...action.payload.men]
                },
                isLoading: false
            };
        case ACTION_TYPES.SEND_REVIEW_SUCCESS:
            return {
                ...state,
                products: {
                    women: [...state.products.women.map(item => item.id !== action.payload.id ? item : action.payload)], 
                    men: [...state.products.men.map(item => item.id !== action.payload.id ? item : action.payload)]
                }
            };
        case ACTION_TYPES.ERROR_REQUEST:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
};

export default productsReducer;