import React from "react";
import Socials from "../Socials/Socials";
import phone from "../../img/phone.svg";
import location_marker from "../../img/location_marker.svg";
import clock from "../../img/clock.svg";

function TopBar() {

    const topBarInfo = [
        {icon: phone, text: "+375 29 100 20 30"}, 
        {icon: location_marker, text: "Belarus, Gomel, Lange 17"}, 
        {icon: clock, text: "All week 24/7"}
    ];

    return (
        <div className = "top-bar">
            <div className = "container">
                <div className = "info-block">
                    <ul className = "info-list">
                        {topBarInfo.map((item, i) => {
                            return ( 
                            <li className = "info-item" key = {i}>
                                <img className = "info-icon" src = {item.icon} alt = "icon"/>
                                <div className = "info-text">{item.text}</div>
                            </li>
                            )
                        })}
                    </ul>
                    <Socials/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
