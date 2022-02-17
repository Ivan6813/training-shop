import React from "react";
import Rating from "../../Rating/Rating";
import add_review_icon from "../../../img/add-review-icon.svg";
import { customerReviews } from "../../constants/constants";
import "./Reviews.scss";

function Reviews() {

    return (
        <div className = "reviews-block">
            <div className = "reviews-title">Reviews</div>
            <div className = "rating-product-block">
                <div className = "rating-info">
                    <Rating/>
                    <div className = "number-reviews">2 Reviews</div>
                </div>
                <div className="add-review">
                    <img  className="add-review-icon" src = {add_review_icon} alt = "icon"/>
                    <div className="add-review-text">Write a review</div>
                </div>
            </div>
            <div className = "customer-reviews">
                <ul className = "customer-reviews-list">
                    {customerReviews.map(item => {
                        return (
                        <li key = {item.id} className = "customer-reviews-item">
                            <div className = "customer-info-block">
                                <div className = "customer-name">{item.name}</div>
                                <div className = "rating-review-block">
                                    <div className = "dispatch-time">{item.time}</div>
                                    <Rating/>
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