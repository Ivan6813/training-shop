import React from "react";

function BackToShoppingBtn({closeCart}) {

    return (
        <button 
            onClick = {() => closeCart()} 
            className = "cart-btn-black"
        >
            back to shopping
        </button>
    );
}

export default BackToShoppingBtn;