import React from "react";
import "./Socials.scss";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import pinterest from "../../img/pinterest.svg";

function Socials() {

    const socials = [facebook, twitter,instagram, pinterest];

    return (
        <ul className = "socials-list">
            {socials.map((item, i) => {
                return ( 
                    <li className = "social-item" key = {i}>
                        <a href = "/">
                            <img className = "social-icon" src = {item} alt = {item} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Socials;