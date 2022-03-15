import React from "react";
import "./Footer-cart.scss";

function FooterCart({order, setIsCartOpen, cartSection, setCartSection}) {

    const totalPrice = order.reduce((acc, item) => {
        acc += item.price*item.quantity;
        return acc;
    },0)

    return (
        <footer className = "footer-cart"> 
            <div className = "cart-container">
                <div className = "order-price-block">
                    <div className = "order-price-text">Total</div>
                    <div className = "order-price">$ {totalPrice.toFixed(2)}</div>
                </div>
                <button  onClick = {() => setCartSection(cartSection + 1)} className="further-btn">
                    {cartSection === 2 ? "Ready" : "Further"} 
                </button>
                <button onClick = {() => setIsCartOpen(false)} className="view-cart-btn">View Cart</button>
            </div>
        </footer>
    );
}

export default FooterCart;
