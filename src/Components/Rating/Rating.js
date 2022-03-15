import React from "react";
import filledStar from "../../img/filled_star.svg";
import unfilledStar from "../../img/unfilled_star.svg";
import { v4 as uuidv4 } from 'uuid';
import "./Rating.scss";

function Rating({rating}) {

    let ratingStars;

    switch(rating) {
        case 1 : 
            ratingStars = [filledStar, unfilledStar,unfilledStar, unfilledStar, unfilledStar];
        break;
        case 2 : 
            ratingStars = [filledStar, filledStar,unfilledStar, unfilledStar, unfilledStar];
        break;
        case 3 : 
            ratingStars = [filledStar, filledStar,filledStar, unfilledStar, unfilledStar];
        break;
        case 4 : 
            ratingStars = [filledStar, filledStar,filledStar, filledStar, unfilledStar];
        break;
        case 5 : 
            ratingStars = [filledStar, filledStar,filledStar, filledStar, filledStar];
        break;
        default : 
            ratingStars = [unfilledStar, unfilledStar, unfilledStar, unfilledStar, unfilledStar];
    }

    return (
        <ul className = "rating-list">
            {ratingStars.map(item => {
                return ( 
                <li className = "rating-item" key = {uuidv4()}>
                    <img className = "star-icon" src = {item} alt = "star-icon" />
                </li>
                )
            })}
        </ul>
    )
}

export default Rating;