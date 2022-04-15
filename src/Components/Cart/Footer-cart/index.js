import React from "react";
import CheckOutBtn from "./CheckOut-btn/CheckOut-btn";
import FurtherBtn from "./Further-btn/Further-btn";
import "./Footer-cart.scss";
import ViewCartBtn from "./ViewCart-btn/ViewCart-btn";

function FooterCart({cartSection, setCartSection, paymentFormik, deliveryFormik, paymentMethod, order}) {

    const totalPrice = order.reduce((acc, item) => {
        acc += item.price*item.quantity;
        return acc;
    },0);

    return (
        <div className = "footer-cart">
            <div className = "cart-container">
                <div className = "order-price-block">
                    <div className = "order-price-text">
                        Total
                    </div>
                    <div className = "order-price">
                        $ {totalPrice.toFixed(2)}
                    </div>
                </div>
                {cartSection !== 2
                 && 
                <FurtherBtn 
                    cartSection = {cartSection}
                    setCartSection = {setCartSection}
                    deliveryFormik = {deliveryFormik}
                    order = {order}
                    totalPrice = {totalPrice.toFixed(2)}
                />}
                {cartSection === 2
                && 
                <CheckOutBtn
                    cartSection = {cartSection}
                    setCartSection = {setCartSection}
                    paymentFormik = {paymentFormik}
                    paymentMethod = {paymentMethod}
                />}
                {cartSection !== 0 && <ViewCartBtn 
                                        clearForm = {false} 
                                        cartSection = {cartSection}
                                        setCartSection = {setCartSection} 
                                        deliveryFormik = {deliveryFormik}
                                        paymentFormik = {paymentFormik}
                                      />
                }
            </div>
        </div>
    );
}

export default FooterCart;
