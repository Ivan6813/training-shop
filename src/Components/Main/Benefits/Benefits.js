import React from "react";
import { benefits } from "../../../constants/constants";
import { v4 as uuidv4 } from 'uuid';
import "./Benefits.scss";

function Benefits() {

    return (
        <div className = "container">
            <div className = "benefits-block">
                <ul className = "benefits-list">
                    {benefits.map(item => {
                        return ( 
                        <li className = "benefits-item" key = {uuidv4()}>
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