import React from "react";
import pay_with_img from "../../../img/pay-with-img.png";
import "./Pay-with.scss";

function PayWith() {

    return (
        <div className = "pay-with-block">
            <div className = "pay-with-title">guaranteed safe checkout</div>
            <img className = "pay-with-img" src = {pay_with_img} alt = "icon"/>
        </div>
    );
}

export default PayWith;