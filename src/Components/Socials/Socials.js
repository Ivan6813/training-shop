import React from "react";
import { socials } from "../constants/constants";
import { Link } from "react-router-dom";
import "./Socials.scss";

function Socials() {

    return (
        <ul className = "socials-list">
            {socials.map((item, i) => {
                return ( 
                <li className = "social-item" key = {i}>
                    <Link to = "/">
                        <img className = "social-icon" src = {item} alt = "icon" />
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default Socials;