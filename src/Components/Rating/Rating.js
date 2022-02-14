import React from "react";
import "./Rating.scss";
import filledStar from "../../img/filled_star.svg";
import unfilledStar from "../../img/unfilled_star.svg";

function Rating() {

    const ratingStars = [filledStar, filledStar,filledStar, filledStar, unfilledStar];

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