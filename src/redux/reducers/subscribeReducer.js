import { ACTION_TYPES } from "../../constants/action-types";

const initialState = {
    mailSendResponse: "",
    isEmailSendSuccess: false,
    isEmailSendLoading: false
};

function subscribeReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.SEND_EMAIL:
            return {...state, isEmailSendLoading: true, isEmailSendSuccess: false, mailSendResponse: ""};
        case ACTION_TYPES.SEND_EMAIL_RESPONSE:
            return {...state, isEmailSendLoading: false, isEmailSendSuccess: true, mailSendResponse: action.payload};
        case ACTION_TYPES.ERROR_SEND_EMAIL:
            return {...state, isEmailSendLoading: false, mailSendResponse: action.payload};
        default:
            return state;
    }
}

export default subscribeReducer;