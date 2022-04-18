import {useSelector} from "react-redux";
import {ThreeDots} from "react-loader-spinner";
import ViewCartBtn from "../footer-cart/view-cart-btn/view-cart-btn";
import BackToBtn from "./back-to-btn/back-to-btn";
import ErrorOrder from "./error-order/error-order";
import SuccessOrder from "./success-order/success-order";
import {serverResponse} from "../../../constants/constants";
import "./cart-status.scss";

const CartStatus = ({setCartSection, closeCart, order}) => {

    const {orderResponse, isLoadingResponse} = useSelector(state => state.order);

    const goToPayment = () => {
        setCartSection(2);
    };

    return (
        <div className = "cart-status-block">
            {isLoadingResponse &&
             <div className = "response-loader">
                <ThreeDots height = "50" width = "50" color = "#121212"/>
            </div>
            }
            {!isLoadingResponse &&
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
                    <BackToBtn text = "back to shopping" func = {closeCart}/>
                    }
                    {orderResponse !== serverResponse.success &&
                    <>
                        <BackToBtn text = "back to payment" func = {goToPayment}/>
                        <ViewCartBtn clearForm = {true} setCartSection = {setCartSection}/>
                    </>
                    }
                </div>
            </>
            }
        </div>
    );
};

export default CartStatus;