import React from "react";
import "./Cart-status.scss";

function CartStatus({cartSection, closeCart}) {

    return (
        <div className = "cart-status-block">
            {(cartSection === 3) 
            ? (
            <div>
                <div className = "cart-status-title">Thank you{"\n"} for your order</div>
                <div className = "cart-status-text">Information about your order{"\n"} will appear in your e-mail.</div>
                <div className = "cart-status-text">Our manager will call you back.</div>
            </div>
           
            ):(
            <div className = "cart-status-title">Sorry,{"\n"} your cart{"\n"} is empty</div>
            )}
            <div className = "cart-container">
                <button onClick = {() => closeCart()} className = "back-to-shop-btn">back to shopping</button>
            </div>
        </div>
    );
}

export default CartStatus;