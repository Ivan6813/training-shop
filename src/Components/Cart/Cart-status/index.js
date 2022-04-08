import React from "react";
import { useSelector } from "react-redux";
import {ThreeDots} from "react-loader-spinner";
import ViewCartBtn from "../Footer-cart/ViewCart-btn/ViewCart-btn";
import BackToPaymentBtn from "./BackToPayment-btn/BackToPayment-btn";
import BackToShoppingBtn from "./BackToShopping-btn/BackTShopping-btn";
import EmptyCart from "./Empty-cart/Empty-cart";
import ErrorOrder from "./Error-order/Error-order";
import SuccessOrder from "./Success-order/Success-order";
import "./Cart-status.scss";


function CartStatus({cartSection, setCartSection, closeCart}) {

    const {orderResponse, isLoadingResponse} = useSelector(state => state.order);

    return (
        <div className = "cart-status-block">
            {isLoadingResponse ? (
             <div className = "response-loader">
                <ThreeDots height = "50" width = "50" color = "#121212"/>
            </div>
            ) : (
            <>
                {(cartSection === 3) 
                ? (
                    <>
                        {orderResponse === "success" ?
                        <SuccessOrder/>
                        :
                        <ErrorOrder errorMesage = {orderResponse}/>
                        }
                    </>
                    
                ):(
                    <EmptyCart/>
                )}
                <div className = "cart-container">
                    {orderResponse === "success" ?
                    <BackToShoppingBtn closeCart = {closeCart}/>
                    :
                    <>
                        <BackToPaymentBtn setCartSection = {setCartSection}/>
                        <ViewCartBtn clearForm = {true} setCartSection = {setCartSection}/>
                    </>
                    }
                </div>
            </>
            )}
        </div>
    );
}

export default CartStatus;