import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import subscribeReducer from "./subscribeReducer";
import reviewsReducer from "./reviewsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    order: cartReducer,
    subscribe: subscribeReducer,
    review: reviewsReducer
});

export default rootReducer;