import React from "react";
import "./Review-rating.scss";

function ReviewRating({setReviewRating}) {
    
    function setRating(event) {
       return setReviewRating(+event.target.value);
    }

    return (
        <div className = "review-rating">
            <div className = "review-rating__items">
                <input 
                     type = "radio"
                     name = "review-rating"
                     className = "rating__item"
                     value = "5"
                     id = "review-rating-5"
                     onChange = {(event) => setRating(event)}
                />
                <label htmlFor = "review-rating-5" className = "rating__label"></label>
                <input 
                     type = "radio"
                     name = "review-rating"
                     className = "rating__item"
                     value = "4"
                     id = "review-rating-4"
                     onChange = {(event) => setRating(event)}
                />
                <label htmlFor = "review-rating-4" className = "rating__label"></label>
                <input 
                     type = "radio"
                     name = "review-rating"
                     className = "rating__item"
                     value = "3"
                     id = "review-rating-3"
                     onChange = {(event) => setRating(event)}
                />
                <label htmlFor = "review-rating-3" className = "rating__label"></label>
                <input 
                     type = "radio"
                     name = "review-rating"
                     className = "rating__item"
                     value = "2"
                     id = "review-rating-2"
                     onChange = {(event) => setRating(event)}
                />
                <label htmlFor = "review-rating-2" className = "rating__label"></label>
                <input 
                     type = "radio"
                     name = "review-rating"
                     className = "rating__item"
                     value = "1" 
                     id = "review-rating-1"
                     onChange = {(event) => setRating(event)}
                     defaultChecked
                />
                <label htmlFor = "review-rating-1" className = "rating__label"></label>
            </div>
        </div>
    );
}

export default ReviewRating;