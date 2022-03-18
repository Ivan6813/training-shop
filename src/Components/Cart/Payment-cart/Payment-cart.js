import React, {useState} from "react";
import payPal from "../../../img/paypal-cart.png";
import visa from "../../../img/visa-cart.png";
import masterCard from "../../../img/mastercard-cart.png";
import "./Payment-cart.scss";

function PaymentCart() {

    const [paymentMethod, setpayMentMethod] = useState(1);

    return (
        <div className = "payment-block">
            <div className = "cart-container">
                <div className = "payment-methods">
                    <div className = "payment-methods-title">Method of payments</div>
                    <ul className = "payment-methods-list">
                        <li className = "payment-methods-item">
                            <label className = "payment-methods-label custom-radio">
                                <input type = "radio"
                                       name = "payment-method"
                                       onChange ={(event) => {if(event.target.checked) setpayMentMethod(0)}}
                                />
                                <span><img className = "payment-icon" src = {payPal} alt = "img"/></span>
                            </label>
                        </li>
                        <li className = "payment-methods-item">
                            <label className = "payment-methods-label custom-radio">
                                <input type = "radio"
                                       name = "payment-method"
                                       defaultChecked
                                       onChange ={(event) => {if(event.target.checked) setpayMentMethod(1)}}
                                />
                                <span><img className = "payment-icon" src = {visa} alt = "img"/></span>
                            </label>
                        </li>
                        <li className = "payment-methods-item">
                            <label className = "payment-methods-label custom-radio">
                                <input type = "radio"
                                       name = "payment-method"
                                       onChange ={(event) => {if(event.target.checked) setpayMentMethod(1)}}
                                />
                                <span><img className = "payment-icon" src = {masterCard} alt = "img"/></span>
                            </label>
                        </li>
                        <li className = "payment-methods-item">
                            <label className = "payment-methods-label custom-radio">
                                <input type = "radio"
                                       name = "payment-method"
                                       onChange ={(event) => {if(event.target.checked) setpayMentMethod(2)}}
                                />
                                <span>Cash</span>
                            </label>
                        </li>
                    </ul>
                </div>
               {paymentMethod === 0 && (
                <div className = "customer-info">
                        <div className = "customer-info-params">E-mail</div>
                        <input type = "text" className = "customer-info-input" placeholder = "E-mail"/>
                    </div>
                )}
               {paymentMethod === 1 && (
                    <div className = "customer-info">
                        <div className = "customer-info-params">Card</div>
                        <input type = "text"
                            className = "customer-info-input customer-params-input"
                            placeholder = "____ ____ ____ ____"
                        />
                        <div className = "customer-card-info">
                            <input type = "text" className = "customer-info-input" placeholder = "YY/MM"/>
                            <input type = "password"
                                className = "customer-info-input customer-cvv-input"
                                placeholder = "CVV"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentCart;