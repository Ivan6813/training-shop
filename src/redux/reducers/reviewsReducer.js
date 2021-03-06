import {ACTION_TYPES} from "../../constants/action-types";

const initialState = {
    isReviewSendLoading: false,
    isReviewSendSuccess: false,
    isReviewSendError: false,
    isReviewsModalWindowOpen: false
};

const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SEND_REVIEW:
            return {
                ...state,
                isReviewSendLoading: true
            };
        case ACTION_TYPES.OPEN_REVIEW_WINDOW:
            return {
                ...state, 
                isReviewsModalWindowOpen: true, 
                isReviewSendSuccess: false, 
                isReviewSendError: false
            };
        case ACTION_TYPES.CLOSE_REVIEW_WINDOW:
            return {
                ...state,
                isReviewsModalWindowOpen: false
            };
        case ACTION_TYPES.SEND_REVIEW_SUCCESS:
            return {
                ...state,
                isReviewSendLoading: false,
                isReviewSendSuccess: true,
                isReviewsModalWindowOpen: false
            };
        case ACTION_TYPES.SEND_REVIEW_ERROR:
            return {
                ...state,
                isReviewSendLoading: false,
                isReviewSendError: true
            };
        default:
            return state;
    }
};

export default reviewsReducer;