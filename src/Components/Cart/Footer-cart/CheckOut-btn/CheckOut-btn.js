import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {sendOrder} from "../../../../redux/actions";

function CheckOutBtn({cartSection, setCartSection, paymentFormik, paymentMethod}) {

    const {orderFormData} = useSelector(state => state.order);
    const dispatch = useDispatch()
    
    function submitFormData() {
        paymentFormik.current?.submitForm();
        if(paymentFormik.current?.isValid) {
            dispatch(sendOrder(orderFormData));
            setCartSection(cartSection + 1);
        }
    }

    return (
        <button 
            onClick = {() => submitFormData()} 
            className = "cart-btn-black"
            type = "button"
        >
            {(paymentMethod === "cash") ? "Ready" : "Check out"}
        </button>
    );
}

export default CheckOutBtn;