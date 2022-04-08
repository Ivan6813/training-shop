import React from "react";
import { useDispatch } from "react-redux";
import { clearFormData } from "../../../../redux/actions";
import "./ViewCart-btn.scss";

function ViewCartBtn({clearForm, setCartSection}) {

    const dispatch = useDispatch();

    function goToItemsSection() {
        if(clearForm) {
            dispatch(clearFormData());
            setCartSection(0);
        }else {
            setCartSection(0);
        }
    }

    return (
        <button 
            onClick = {() => goToItemsSection()}
            className = "view-cart-btn"
            type = "button"
        >
            View Cart
        </button>
    );
}

export default ViewCartBtn;