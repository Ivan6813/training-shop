import {useDispatch} from "react-redux";
import Rating from "../../rating/rating";
import {openReviewWindow} from "../../../redux/actions";
import "./reviews.scss";

const Reviews = ({product}) => {

    const dispatch = useDispatch();
    const {rating, reviews} = product;

    const openReviews = () => {
        dispatch(openReviewWindow());
    };

    return (
        <div className = "reviews-block">
            <div className = "reviews-title">Reviews</div>
            <div className = "rating-product-block">
                <div className = "rating-info">
                    <Rating rating = {rating}/>
                    <div className = "number-reviews">
                        {reviews?.length} Reviews
                    </div>
                </div>
                <button 
                    onClick = {openReviews}
                    className = "add-review-button"
                    data-test-id = "review-button"
                >
                    Write a review
                </button>
            </div>
            <div className = "customer-reviews">
                <ul className = "customer-reviews-list">
                    {reviews && reviews.map(({id, name, text, rating}) => (
                        <li key = {id} className = "customer-reviews-item">
                            <div className = "customer-info-block">
                                <div className = "customer-name">
                                    {name}
                                </div>
                                 <Rating rating = {rating}/>
                            </div>
                            <p className = "customer-text">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Reviews;