import React from "react";
import truck from "../../img/truck.svg";
import refresh from "../../img/refresh.svg";
import support from "../../img/support.svg";

function Benefits() {

    const benefits = [
        {title: "FREE SHIPPING", icon: truck, text: "On all UA order or order above $100"}, 
        {title: "30 DAYS RETURN", icon: refresh, text: "Simply return it within 30 days for an exchange"}, 
        {title: "SUPPORT 24/7", icon: support, text: "Contact us 24 hours a day, 7 days a week"}
    ];

    return (
        <div className = "container">
            <div className = "benefits-block">
                <ul className = "benefits-list">
                    {benefits.map((item, i) => {
                        return ( 
                        <li className = "benefits-item" key = {i}>
                            <div className = "benefits-icon-block">
                                <img className = "benefits-icon" src = {item.icon} alt = "icon"/>
                            </div>
                            <div className = "benefits-text-block">
                                <div className = "benefits-title">{item.title}</div>
                                <div className = "benefits-text">{item.text}</div>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Benefits;