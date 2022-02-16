import React from "react";
import { footerContacts } from "../../constants/constants";

function Contacts() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-info-title">Contact us</div>
            <ul className = "footer-info-list">
                {footerContacts.map(item => {
                    return ( 
                    <li className = "footer-info-item" key = {item.id}>
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