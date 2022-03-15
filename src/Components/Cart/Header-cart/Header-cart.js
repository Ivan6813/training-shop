import React from "react";
import "./Header-cart.scss";

function HeaderCart({setIsCartOpen}) {

    return (
        <header className = "wrapper-header-cart">
            <div className = "cart-container">
                <div className = "header-cart">
                    <div className = "header-cart-title">Shopping cart</div>
                    <button onClick = {() => setIsCartOpen(false)} className = "header-cart-btn"></button>
                </div>
            </div>
        </header>    
    );
}

export default HeaderCart;
