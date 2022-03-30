import React, {useState} from "react";
import { useDispatch} from "react-redux";
import {closeReviewWindow} from "../../../redux/actions";
import ReviewRating from "./Review-rating/Review-rating";
import ReviewForm from "./Review-form/Review-form";
import "./Review-modal-window.scss";

function ReviewModalWindow({id}) {

    const [reviewRating, setReviewRating] = useState(1);
    const dispatch = useDispatch();

    return (
        <div onClick = {() => dispatch(closeReviewWindow())} className = "review-modal-block">
            <div onClick = {(event) => event.stopPropagation()}
                 className = "review-modal-window"
                 data-test-id = "review-modal"
            >
                <div className = "review-modal-title">Write a review</div>
                <ReviewRating setReviewRating = {setReviewRating}/>
                <ReviewForm id = {id} reviewRating = {reviewRating}/>
            </div>
        </div>
    );
}

export default ReviewModalWindow;