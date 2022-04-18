import {useState, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import classNames from "classnames";
import HeaderCart from "./header-cart/header-cart";
import NavBarCart from "./nav-bar-cart/nav-bar-cart";
import CartItems from "./cart-items/cart-items";
import CartStatus from "./cart-status/index";
import DeliveryInfo from "./delivery-info/delivery-info";
import PaymentInfo from "./payment-info/payment-info";
import FooterCart from "./footer-cart";
import {clearCartItems, clearFormData} from "../../redux/actions";
import {serverResponse, paymentMethods} from "../../constants/constants";
import "./cart.scss";

const Cart = ({isCartOpen, setIsCartOpen}) => {

    const [cartSection, setCartSection] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods.visa);
    const {order, orderResponse} = useSelector(state => state.order);
    const deliveryFormik = useRef();
    const paymentFormik = useRef();
    const dispatch = useDispatch();
    
    const closeCart = () => {
        if(cartSection === 3 && orderResponse === serverResponse.success) {
            setIsCartOpen(false);
            setCartSection(0);
            dispatch(clearFormData());
            dispatch(clearCartItems());
        }else {
            setIsCartOpen(false);
            setCartSection(0);
            dispatch(clearFormData());
        } 
    };

    return (
        <div 
            onClick = {closeCart} 
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
                                                cartSection = {cartSection} 
                                                setCartSection = {setCartSection} 
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
                        setCartSection = {setCartSection}
                        closeCart = {closeCart}
                        order = {order}
                    />
                )}
            </div>
        </div>
    );
};

export default Cart;
