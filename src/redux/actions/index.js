import { ACTION_TYPES } from "../../constants/action-types";

export function addOrder(payload) {
    return { type: ACTION_TYPES.ADD_ORDER , payload};
};

export function removeOrder(payload) {
    return { type: ACTION_TYPES.REMOVE_ORDER , payload};
};

export function increaseQauntity(payload) {
    return { type: ACTION_TYPES.INCREASE_QUANTITY , payload};
};

export function decreaseQauntity(payload) {
    return { type: ACTION_TYPES.DECREASE_QUANTITY , payload};
};

export function getAllProducts() {
    return { type: ACTION_TYPES.GET_PRODUCTS};
};

export function getOneProduct(id) {
    return { type: ACTION_TYPES.GET_PRODUCT, payload: {id}};
};

export function getProductsCategory(category) {
    return { type: ACTION_TYPES.GET_PRODUCTS_CATEGORY,  payload: {category}};
};

export function setAllProducts(payload) {
    return { type: ACTION_TYPES.SET_PRODUCTS, payload};
};

export function setProduct(payload) {
    return { type: ACTION_TYPES.SET_PRODUCT, payload};
};

export function setProductsCategory(payload) {
    return { type: ACTION_TYPES.SET_PRODUCTS_CATEGORY, payload};
};

export function errorRequest() {
    return { type: ACTION_TYPES.ERROR_REQUEST};
};