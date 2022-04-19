import {ACTION_TYPES} from "../../constants/action-types";

export const addOrder = (payload) => {
    return {type: ACTION_TYPES.ADD_ORDER, payload};
};

export const removeOrder = (payload) => {
    return {type: ACTION_TYPES.REMOVE_ORDER, payload};
};

export const increaseQauntity = (payload) => {
    return {type: ACTION_TYPES.INCREASE_QUANTITY, payload};
};

export const decreaseQauntity = (payload) => {
    return {type: ACTION_TYPES.DECREASE_QUANTITY, payload};
};

export const getProducts = () => {
    return {type: ACTION_TYPES.GET_PRODUCTS};
};

export const setProducts = (payload) => {
    return {type: ACTION_TYPES.SET_PRODUCTS, payload};
};

export const errorRequest = () => {
    return {type: ACTION_TYPES.ERROR_REQUEST};
};

export const sendEmail = (payload) => {
    return {type: ACTION_TYPES.SEND_EMAIL, payload};
};

export const sendEmailResponse = (payload) => {
    return {type: ACTION_TYPES.SEND_EMAIL_RESPONSE, payload};
};

export const errorSendEmail = (payload) => {
    return {type: ACTION_TYPES.SEND_EMAIL_ERROR, payload};
};

export const openReviewWindow = () => {
    return {type: ACTION_TYPES.OPEN_REVIEW_WINDOW};
};

export const closeReviewWindow = () => {
    return {type: ACTION_TYPES.CLOSE_REVIEW_WINDOW};
};

export const sendReview = (payload) => {
    return {type: ACTION_TYPES.SEND_REVIEW, payload};
};

export const sendReviewResponse = (payload) => {
    return {type: ACTION_TYPES.SEND_REVIEW_SUCCESS, payload};
};

export const errorSendReview = () => {
    return {type: ACTION_TYPES.SEND_REVIEW_ERROR};
};

export const saveDeliveryFormData = (payload) => {
    return {type: ACTION_TYPES.SAVE_DELIVERY_FORM, payload};
};

export const savePaymentFormData = (payload) => {
    return {type: ACTION_TYPES.SAVE_PAYMENT_FORM, payload};
};

export const clearFormData = () => {
    return {type: ACTION_TYPES.CLEAR_FORM_DATA};
};

export const clearCartItems = () => {
    return {type: ACTION_TYPES.CLEAR_CART_ITEMS};
};

export const addOrderFormData = (payload) => {
    return {type: ACTION_TYPES.ADD_ORDER_FORM_DATA, payload};
};

export const sendOrder = (payload) => {
    return {type: ACTION_TYPES.SEND_ORDER, payload};
};

export const orderResponse = (payload) => {
    return {type: ACTION_TYPES.ORDER_RESPONSE, payload};
};

export const getCountries = () => {
    return {type: ACTION_TYPES.GET_COUNTRIES};
};

export const setCountries = (payload) => {
    return {type: ACTION_TYPES.SET_COUNTRIES, payload};
};

export const getCities = (payload) => {
    return {type: ACTION_TYPES.GET_CITIES, payload};
};

export const setCities = (payload) => {
    return { type: ACTION_TYPES.SET_CITIES, payload};
};

export const clearCities = () => {
    return {type: ACTION_TYPES.CLEAR_CITIES};
};

export const countriesRequestError = (payload) => {
    return {type: ACTION_TYPES.COUNTRIES_REQUEST_ERROR, payload};
};

export const citiesRequestError = (payload) => {
    return {type: ACTION_TYPES.CITIES_REQUEST_ERROR, payload};
};