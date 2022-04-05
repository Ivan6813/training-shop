import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Delivery-info.scss";

function DeliveryInfo() {

    const [chosenMethod, setChosenMethod] = useState(0);
    const deliveryMethods = ["Pickup from post offices", "Express delivery", "Store pickup"]

    return (
        <div className = "delivery-block">
            <div className = "cart-container">
                <div className = "delivery-methods">
                    <div className = "delivery-methods-title">Choose the method of delivery of the items</div>
                    <ul className = "delivery-methods-list">
                        {deliveryMethods.map((item, index) => {
                            return (
                                <li className = "delivery-methods-item" key = {uuidv4()}>
                                    <label className = "delivery-methods-label custom-radio">
                                        <input type = "radio" 
                                            name = "delivery-method"
                                            defaultChecked = {index === 0}
                                            value = {item}
                                            onChange ={(event) => {if(event.target.checked) setChosenMethod(index)}}
                                        />
                                        <span>{item}</span>
                                    </label>
                                </li>
                            );
                        })}
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
                        <input type = "text" className = "customer-info-input" placeholder = "BY ______"/>
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