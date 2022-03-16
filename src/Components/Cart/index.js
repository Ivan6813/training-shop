import React, {useState} from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import HeaderCart from "./Header-cart/Header-cart";
import NavBarCart from "./Nav-bar-cart/Nav-bar-cart";
import CartItems from "./Cart-items/Cart-items";
import DeliveryInfo from "./Delivery-info/Delivery-info";
import PaymentCart from "./Payment-cart/Payment-cart";
import FooterCart from "./Footer-cart/Footer-cart";
import CartStatus from "./Cart-status/Cart-status";
import "./Cart.scss";


function Cart({isCartOpen, setIsCartOpen}) {

    const [cartSection, setCartSection] = useState(0);
    const {order} = useSelector(state => state);

    function closeCart() {
        setIsCartOpen(false);
        setCartSection(0);
    }

    return (
        <div onClick = {() => closeCart()} 
             className = {classNames("cart-block", {is_open_cart: isCartOpen})}
        >
            <div className = "cart-dark-bg"></div>
            <div className = "cart" 
                 onClick = {(e) => e.stopPropagation()}
                 data-test-id = "cart"
            >
                <HeaderCart closeCart = {closeCart}/>
                {(!!order.length && cartSection !== 3) ? (
                    <>
                        <NavBarCart cartSection = {cartSection}/>
                        {cartSection === 0 && <CartItems/>}
                        {cartSection === 1 && <DeliveryInfo/>}
                        {cartSection === 2 && <PaymentCart/>}
                        <FooterCart order = {order} 
                                    closeCart = {closeCart}
                                    cartSection = {cartSection}
                                    setCartSection = {setCartSection}
                        />
                    </>
                ):(
                    <CartStatus cartSection = {cartSection}
                                closeCart = {closeCart}
                    />
                )}
            </div>
        </div>
    );
}

export default Cart;
