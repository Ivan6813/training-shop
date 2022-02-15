import React from "react";
import { socials } from "../constants/constants";
import "./Socials.scss";

function Socials() {

    return (
        <ul className = "socials-list">
            {socials.map((item, i) => {
                return ( 
                <li className = "social-item" key = {i}>
                    <a href = "/">
                        <img className = "social-icon" src = {item} alt = "icon" />
                    </a>
                </li>
                )
            })}
        </ul>
    )
}

export default Socials;