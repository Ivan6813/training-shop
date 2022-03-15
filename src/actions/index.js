import { ACTION_TYPES } from "../constants/action-types";

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