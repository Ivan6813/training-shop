import React from "react";
import { ratingStars } from "../constants/constants";
import "./Rating.scss";

function Rating() {

    return (
        <ul className = "rating-list">
            {ratingStars.map((item, i) => {
                return ( 
                <li className = "rating-item" key = {i}>
                    <img className = "star-icon" src = {item} alt = "star-icon" />
                </li>
                )
            })}
        </ul>
    )
}

export default Rating;