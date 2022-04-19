import {useDispatch} from "react-redux";
import CartBtn from "./cart-btn/cart-btn";
import {
    addOrderFormData, 
    saveDeliveryFormData, 
    savePaymentFormData
} from "../../../redux/actions";
import {paymentMethods} from "../../../constants/constants";
import "./footer-cart.scss";


const FooterCart = ({
    cartSection, 
    setCartSection,
    paymentFormik, 
    deliveryFormik, 
    paymentMethod, 
    order,
    products
}) => {

    const dispatch = useDispatch();

    const totalPrice = order.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
    },0);

    const handleFurtherBtn = () => {
        if(cartSection === 0) {
            dispatch(addOrderFormData({
                products: products, 
                totalPrice: totalPrice
            }));
            setCartSection(cartSection + 1); 
            return;
        }
        deliveryFormik.current?.submitForm();
        if(deliveryFormik.current?.isValid) {
            setCartSection(cartSection + 1);
        } else {
            deliveryFormik.current?.setFieldValue("agree", false);
        }
    };

    const handleCheckOutBtn = () => {
        paymentFormik.current?.submitForm();
    };

    const handleViewCartBtn = () => {
        if(cartSection === 1) {
            dispatch(saveDeliveryFormData(deliveryFormik.current?.values));
            setCartSection(0);
            return;
        }
        dispatch(savePaymentFormData(paymentFormik.current?.values));
        setCartSection(1);
    };

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
                {cartSection !== 2 && 
                <CartBtn text = "Further" handle = {handleFurtherBtn} bg = "black"/>
                }
                {cartSection === 2 && 
                <CartBtn 
                    text = {(paymentMethod === paymentMethods.cash) ? 
                        "Ready" : "Check out"
                    }
                    handle = {handleCheckOutBtn}
                    bg = "black"
                />
                }
                {!!cartSection && 
                <CartBtn text = "View Cart" handle = {handleViewCartBtn} bg = "grey"/>
                }
            </div>
        </div>
    );
};

export default FooterCart;
