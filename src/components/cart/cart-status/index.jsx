import {useSelector, useDispatch} from "react-redux";
import {ThreeDots} from "react-loader-spinner";
import ErrorOrder from "./error-order/error-order";
import SuccessOrder from "./success-order/success-order";
import CartBtn from "../footer-cart/cart-btn/cart-btn";
import {serverResponse} from "../../../constants/constants";
import {clearFormData} from "../../../redux/actions";
import "./cart-status.scss";

const CartStatus = ({setCartSection, closeCart, order}) => {

    const {orderResponse, isLoadingResponse} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const handleToPaymentBtn = () => {
        setCartSection(2);
    };

    const handleViewCartBtn = () => {
        dispatch(clearFormData());
        setCartSection(0);
    };
    
    return (
        <div className = "cart-status-block">
            {isLoadingResponse ? (
            <div className = "response-loader">
                <ThreeDots height = "50" width = "50" color = "#121212"/>
            </div>
            ) : (
            <>
                {!!order.length &&
                <>
                    {orderResponse === serverResponse.success &&
                    <SuccessOrder/>
                    }
                    {orderResponse !== serverResponse.success && 
                    <ErrorOrder errorMesage = {orderResponse}/>
                    }
                </>
                }
                {!order.length && 
                <div className = "cart-status-title">
                    Sorry,{"\n"} your cart{"\n"} is empty
                </div>
                }
                <div className = "cart-container">
                    {(orderResponse === serverResponse.success || !order.length) &&
                    <CartBtn 
                        text = "back to shopping" 
                        handle = {closeCart} 
                        bg = "black"
                    />
                    }
                    {(orderResponse !== serverResponse.success && !!order.length) &&
                    <>
                        <CartBtn 
                            text = "back to payment" 
                            handle = {handleToPaymentBtn} 
                            bg = "black"
                        />
                        <CartBtn 
                            text = "View Cart" 
                            handle = {handleViewCartBtn} 
                            bg = "grey"
                        />
                    </>
                    }
                </div>
            </>
            )}
        </div>
    );
};

export default CartStatus;