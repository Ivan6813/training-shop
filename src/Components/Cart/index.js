import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import HeaderCart from "./Header-cart/Header-cart";
import NavBarCart from "./Nav-bar-cart/Nav-bar-cart";
import CartItems from "./Cart-items/Cart-items";
import CartStatus from "./Cart-status/index";
import DeliveryInfo from "./Delivery-info/Delivery-info";
import PaymentInfo from "./Payment-info/Payment-info";
import { clearCartItems, clearFormData } from "../../redux/actions";
import FooterCart from "./Footer-cart";
import "./Cart.scss";

function Cart({isCartOpen, setIsCartOpen}) {

    const [cartSection, setCartSection] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("visa");
    const {order, orderResponse} = useSelector(state => state.order);
    const deliveryFormik = useRef();
    const paymentFormik = useRef();
    const dispatch = useDispatch();
    
    function closeCart() {
        if(cartSection === 3 && orderResponse === "success") {
            setIsCartOpen(false);
            setCartSection(0);
            dispatch(clearFormData());
            dispatch(clearCartItems());
        }else {
            setIsCartOpen(false);
            setCartSection(0);
            dispatch(clearFormData());
        } 
    }

    return (
        <div 
            onClick = {() => closeCart()} 
            className = {classNames("cart-block", {is_open_cart: isCartOpen})}
        >
            <div className = "cart-dark-bg"></div>
            <div 
                className = "cart" 
                onClick = {(event) => event.stopPropagation()}
                data-test-id = "cart"
            >
                <HeaderCart closeCart = {closeCart}/>
                {(!!order.length && cartSection !== 3) ? (  
                    <>
                        <NavBarCart cartSection = {cartSection}/>
                        {cartSection === 0 && <CartItems order = {order}/>}
                        {cartSection === 1 && <DeliveryInfo deliveryFormik = {deliveryFormik}/>}
                        {cartSection === 2 && <PaymentInfo 
                                                paymentFormik = {paymentFormik} 
                                                setPaymentMethod = {setPaymentMethod}
                                              />
                        }
                        <FooterCart 
                            cartSection = {cartSection} 
                            setCartSection = {setCartSection} 
                            paymentFormik = {paymentFormik} 
                            paymentMethod = {paymentMethod} 
                            deliveryFormik = {deliveryFormik}
                            order = {order}
                        />
                    </>
                ):(
                    <CartStatus 
                        cartSection = {cartSection}
                        setCartSection = {setCartSection}
                        closeCart = {closeCart}
                        order = {order}
                    />
                )}
            </div>
        </div>
    );
}

export default Cart;
