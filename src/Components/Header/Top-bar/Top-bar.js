import React from "react";
import { topBarInfo } from "../../../constants/constants";
import Socials from "../../Socials/Socials";
import { v4 as uuidv4 } from 'uuid';
import "./Top-bar.scss";

function TopBar() {

    return (
        <div className = "top-bar">
            <div className = "container">
                <div className = "info-block">
                    <ul className = "info-list">
                        {topBarInfo.map(item => {
                            return ( 
                            <li className = "info-item" key = {uuidv4()}>
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
