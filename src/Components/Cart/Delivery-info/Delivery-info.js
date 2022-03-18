import React, {useState} from "react";
import "./Delivery-info.scss";

function DeliveryInfo() {

    const [chosenMethod, setChosenMethod] = useState(0);

    return (
        <div className = "delivery-block">
            <div className = "cart-container">
                <div className = "delivery-methods">
                    <div className = "delivery-methods-title">Choose the method of delivery of the items</div>
                    <ul className = "delivery-methods-list">
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio" 
                                       name = "delivery-method"
                                       defaultChecked
                                       onChange ={(event) => {if(event.target.checked) setChosenMethod(0)}}
                                />
                                <span>Pickup from post offices</span>
                            </label>
                        </li>
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio"
                                       name = "delivery-method"
                                       onChange ={(event) => {if(event.target.checked) setChosenMethod(1)}}
                                />
                                <span>Express delivery</span>
                            </label>
                        </li>
                        <li className = "delivery-methods-item">
                            <label className = "delivery-methods-label custom-radio">
                                <input type = "radio" 
                                       name = "delivery-method"
                                       onChange ={(event) => {if(event.target.checked) setChosenMethod(2)}}
                                />
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
                {chosenMethod !== 2 &&  (
                <>
                    <input type = "text" className = "customer-info-input customer-params-input" placeholder = "City"/>
                    <input type = "text" className = "customer-info-input customer-params-input" placeholder = "Street"/>
                    <div className="customer-adress">
                        <input type = "text" className = "customer-info-input customer-adress-input" placeholder = "House"/>
                        <input type = "text" className = "customer-info-input" placeholder = "Apartment"/>
                    </div>
                </>
                )}
                { chosenMethod === 2 && (
                    <select className = "customer-store-adress">
                        <option>Store adress</option>
                        <option>463 Massachusetts Ave, Cambridge</option>
                        <option>14 McGrath Hwy, Somerville</option>
                        <option>870 Massachusetts Ave, Boston</option>
                        <option>301 Warren St, Roxbury</option>
                        <option>463 Massachusetts Ave, Cambridge</option>
                        <option>14 McGrath Hwy, Somerville</option>
                    </select>)}
                </div>
                {chosenMethod === 0 && ( 
                    <div className = "customer-info">
                        <div className = "customer-info-params">POSTcode</div>
                        <input type = "text" className = "customer-info-input" placeholder="BY ______"/>
                    </div>
                )}
                <div className = "consent-form">
                    <label className = "consent-form-label custom-checkbox">
                        <input type = "checkbox"/>
                        <span>I agree to the processing of my personal information</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DeliveryInfo;