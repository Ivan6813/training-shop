import React from "react";
import Rating from "../../Rating/Rating";
import add_review_icon from "../../../img/add-review-icon.svg";
import "./Reviews.scss";

function Reviews({reviews, rating}) {

    return (
        <div className = "reviews-block">
            <div className = "reviews-title">Reviews</div>
            <div className = "rating-product-block">
                <div className = "rating-info">
                    <Rating rating = {rating}/>
                    <div className = "number-reviews">{reviews.length} Reviews</div>
                </div>
                <div className="add-review">
                    <img  className="add-review-icon" src = {add_review_icon} alt = "icon"/>
                    <div className="add-review-text">Write a review</div>
                </div>
            </div>
            <div className = "customer-reviews">
                <ul className = "customer-reviews-list">
                    {reviews.map(item => {
                        return (
                        <li key = {item.id} className = "customer-reviews-item">
                            <div className = "customer-info-block">
                                <div className = "customer-name">{item.name}</div>
                                <div className = "rating-review-block">
                                    <div className = "dispatch-time">3 months ago</div>
                                    <Rating rating = {item.rating}/>
                                </div>
                            </div>
                            <p className = "customer-text">{item.text}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Reviews;