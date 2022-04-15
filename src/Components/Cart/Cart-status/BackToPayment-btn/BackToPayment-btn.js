import React from "react";

function BackToPaymentBtn({setCartSection}) {

    return (
        <button 
            onClick = {() => setCartSection(2)} 
            className = "cart-btn-black"
        >
            back to payment
        </button>
    );
}

export default BackToPaymentBtn;