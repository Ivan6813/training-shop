import React from "react";
import location_marker from "../../img/f_location_marker.svg";
import phone from "../../img/f_phone.svg";
import clock from "../../img/f_clock.svg";
import email from "../../img/email.svg";

function Contacts() {

    const footerInfo = [
        {icon: location_marker, text: "Belarus, Gomel, Lange 17"},
        {icon: phone, text: "+375 29 100 20 30"}, 
        {icon: clock, text: "All week 24/7"},
        {icon: email, text: "info@clevertec.ru"}
    ];

    return (
        <div className = "footer-nav-block">
            <div className = "footer-info-title">Contact us</div>
            <ul className = "footer-info-list">
                {footerInfo.map((item, i) => {
                    return ( 
                    <li className = "footer-info-item" key = {i}>
                        <img className = "footer-info-icon" src = {item.icon} alt = "icon"/>
                        <div className = "footer-info-text">{item.text}</div>
                    </li>
                    )
                })}
            </ul>
        </div>        
    );
}

export default Contacts;