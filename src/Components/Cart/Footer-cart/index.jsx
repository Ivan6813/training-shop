import CheckOutBtn from "./check-out-btn/check-out-btn";
import FurtherBtn from "./further-btn/further-btn";
import ViewCartBtn from "./view-cart-btn/view-cart-btn";
import "./footer-cart.scss";

const FooterCart = ({cartSection, setCartSection, paymentFormik, deliveryFormik, paymentMethod, order}) => {

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
};

export default FooterCart;
