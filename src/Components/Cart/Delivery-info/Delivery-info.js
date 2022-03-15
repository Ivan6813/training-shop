import React from "react";
import "./Delivery-info.scss";

function DeliveryInfo() {

    return (
        <div className = "delivery-block">
            <div className = "cart-container">
                <div className = "delivery-methods">
                    <div className = "delivery-methods-title">Choose the method of delivery of the items</div>
                    <ul className = "delivery-methods-list">
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio" name = "delivery-method" defaultChecked/>
                                <span>Pickup from post offices</span>
                            </label>
                        </li>
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio" name = "delivery-method"/>
                                <span>Express delivery</span>
                            </label>
                        </li>
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio" name = "delivery-method"/>
                                <span>Store pickup</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className = "customer-info">
                    <div className = "customer-info-params">Phone</div>
                    <input type = "text" className = "customer-info-input" placeholder="+375 (__) _______"/>
                </div>
                <div className = "customer-info">
                    <div className = "customer-info-params">E-mail</div>
                    <input type = "text" className  ="customer-info-input" placeholder="E-mail"/>
                </div>
                <div className = "customer-info">
                    <div className = "customer-info-params">Adress</div>
                    <input type = "text" className = "customer-info-input customer-params-input" placeholder = "Country"/>
                    <input type = "text" className = "customer-info-input customer-params-input" placeholder = "City"/>
                    <input type = "text" className = "customer-info-input customer-params-input" placeholder = "Street"/>
                    <div className="customer-adress">
                        <input type = "text" className = "customer-info-input customer-adress-input" placeholder = "House"/>
                        <input type = "text" className = "customer-info-input" placeholder = "Apartment"/>
                    </div>
                    <select className = "customer-store-adress">
                        <option>Store adress</option>
                        <option>Store adress</option>
                        <option>Store adress</option>
                    </select>
                </div>
                <div className = "customer-info">
                    <div className = "customer-info-params">POSTcode</div>
                    <input type = "text" className = "customer-info-input" placeholder="BY ______"/>
                </div>
                <div className = "consent-form">
                    <label className = "consent-form-label">
                        <input type = "checkbox" className = "consent-form-input"/>
                        <span>I agree to the processing of my personal information</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DeliveryInfo;