import React from "react";
import Rating from "../../Rating/Rating";
import add_review_icon from "../../../img/add-review-icon.svg";
import "./Reviews.scss";

function Reviews({product}) {

    return (
        <div className = "reviews-block">
            <div className = "reviews-title">Reviews</div>
            <div className = "rating-product-block">
                <div className = "rating-info">
                    <Rating rating = {product.rating}/>
                    <div className = "number-reviews">{product.reviews.length} Reviews</div>
                </div>
                <div className="add-review">
                    <img  className="add-review-icon" src = {add_review_icon} alt = "icon"/>
                    <div className="add-review-text">Write a review</div>
                </div>
            </div>
            <div className = "customer-reviews">
                <ul className = "customer-reviews-list">
                    {product.reviews.map(item => {
                        return (
                        <li key = {item.id} className = "customer-reviews-item">
                            <div className = "customer-info-block">
                                <div className = "customer-name">{item.name}</div>
                                 <Rating rating = {item.rating}/>
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