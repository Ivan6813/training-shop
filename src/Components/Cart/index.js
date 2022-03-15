import React, {useState} from "react";
import { useSelector } from "react-redux";
import HeaderCart from "./Header-cart/Header-cart";
import NavBarCart from "./Nav-bar-cart/Nav-bar-cart";
import CartItems from "./Cart-items/Cart-items";
import DeliveryInfo from "./Delivery-info/Delivery-info";
import PaymentCart from "./Payment-cart/Payment-cart";
import FooterCart from "./Footer-cart/Footer-cart";
import CartStatus from "./Cart-status/Cart-status";
import "./Cart.scss";


function Cart({setIsCartOpen}) {

    const [cartSection, setCartSection] = useState(0);
    const {order} = useSelector(state => state);

    function closeCart(event) {
        if(event.target.className === "cart") setIsCartOpen(false);
    }

    return (
        <div onClick = {(event) => closeCart(event)} className = "cart">
            <div className = "cart-elem" data-test-id = "cart">
                <HeaderCart setIsCartOpen = {setIsCartOpen}/>
                {(!!order.length && cartSection !== 3) ? (
                    <>
                        <NavBarCart cartSection = {cartSection}/>
                        {cartSection === 0 && <CartItems/>}
                        {cartSection === 1 && <DeliveryInfo/>}
                        {cartSection === 2 && <PaymentCart/>}
                        <FooterCart order = {order} 
                                    setIsCartOpen = {setIsCartOpen}
                                    cartSection = {cartSection}
                                    setCartSection = {setCartSection}
                        />
                    </>
                ):(
                    <CartStatus cartSection = {cartSection}
                               setIsCartOpen = {setIsCartOpen}
                    />
                )}
            </div>
        </div>
    );
}

export default Cart;
