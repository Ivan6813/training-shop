import React from "react";
import { useDispatch } from "react-redux";
import { openReviewWindow } from "../../../redux/actions";
import Rating from "../../Rating/Rating";
import "./Reviews.scss";

function Reviews({product}) {

    const dispatch = useDispatch();

    return (
        <div className = "reviews-block">
            <div className = "reviews-title">Reviews</div>
            <div className = "rating-product-block">
                <div className = "rating-info">
                    <Rating rating =  {product.rating}/>
                    <div className = "number-reviews">
                        {product.reviews?.length} Reviews
                    </div>
                </div>
                <button 
                    onClick = {() => dispatch(openReviewWindow())}
                    className = "add-review-button"
                    data-test-id = "review-button"
                >
                    Write a review
                </button>
            </div>
            <div className = "customer-reviews">
                <ul className = "customer-reviews-list">
                    {product.reviews && product.reviews.map(item => {
                        return (
                        <li key = {item.id} className = "customer-reviews-item">
                            <div className = "customer-info-block">
                                <div className = "customer-name">
                                    {item.name}
                                </div>
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