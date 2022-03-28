import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import subscribeReducer from "./subscribeReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    order: cartReducer,
    subscribe: subscribeReducer
});

export default rootReducer;