import React from "react";

function CheckOutBtn({paymentFormik, paymentMethod}) {

    function submitFormData() {
        paymentFormik.current?.submitForm();
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