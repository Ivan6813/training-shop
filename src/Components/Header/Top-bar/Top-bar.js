import React from "react";
import { topBarInfo } from "../../constants/constants";
import Socials from "../../Socials/Socials";
import "./Top-bar.scss";

function TopBar() {

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
