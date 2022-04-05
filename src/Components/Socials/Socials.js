import React from "react";
import { socials } from "../../constants/constants";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./Socials.scss";

function Socials() {

    return (
        <ul className = "socials-list">
            {socials.map(item => {
                return ( 
                <li className = "social-item" key = {uuidv4()}>
                    <Link to = "/">
                        <img 
                            className = "social-icon" 
                            src = {item} 
                            alt = "icon"
                        />
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default Socials;