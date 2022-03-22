import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    order: cartReducer
});

export default rootReducer;