import {useState} from "react";
import {useDispatch} from "react-redux";
import ReviewRating from "./review-rating/review-rating";
import ReviewForm from "./review-form/review-form";
import {closeReviewWindow} from "../../../redux/actions";
import "./review-modal-window.scss";

const ReviewModalWindow = ({id}) => {

    const [reviewRating, setReviewRating] = useState(1);
    const dispatch = useDispatch();

    const closeReviews = () => {
        dispatch(closeReviewWindow());
    };

    return (
        <div 
            onClick = {closeReviews} 
            className = "review-modal-block"
        >
            <div 
                onClick = {(event) => event.stopPropagation()}
                className = "review-modal-window"
                data-test-id = "review-modal"
            >
                <div className = "review-modal-title">
                    Write a review
                </div>
                <ReviewRating setReviewRating = {setReviewRating}/>
                <ReviewForm 
                    id = {id}
                    reviewRating = {reviewRating}
                />
            </div>
        </div>
    );
};

export default ReviewModalWindow;