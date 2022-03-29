import React, {useState, useEffect} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {Oval} from "react-loader-spinner";
import "./Review-modal-window.scss";
import { useDispatch, useSelector } from "react-redux";
import { sendReview, getProducts, closeReviewWindow } from "../../../redux/actions";

function ReviewModalWindow({id}) {

    const [reviewRating, setReviewRating] = useState(1);
    const {isReviewSendLoading, isReviewSendSuccess, isReviewSendError} = useSelector(state => state.review);
    const dispatch = useDispatch();
    console.log(isReviewSendError);

    useEffect(() => {
        if(isReviewSendSuccess) {
            dispatch(closeReviewWindow())
            dispatch(getProducts());
        }
    },[isReviewSendSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

    const validationSchema = yup.object().shape({
        name: yup.string().trim().required("Введите имя"),
        review: yup.string().trim().required("Введите отзыв")
    })

    return (
        <div onClick = {() => dispatch(closeReviewWindow())} className = "review-modal-block">
            <div onClick = {(event) => event.stopPropagation()}
                 className = "review-modal-window"
                 data-test-id = "review-modal"
            >
                <div className = "review-modal-title">Write a review</div>
                <div className = "review-rating">
                    <div className = "review-rating__items">
                        <input type = "radio"
                               name = "review-rating"
                               className = "rating__item"
                               value = "5"
                               id = "review-rating-5"
                               onChange = {(event) => setReviewRating(event.target.value)}
                        />
                        <label htmlFor = "review-rating-5" className = "rating__label"></label>
                        <input type = "radio"
                               name = "review-rating"
                               className = "rating__item"
                               value = "4"
                               id = "review-rating-4"
                               onChange = {(event) => setReviewRating(event.target.value)}
                        />
                        <label htmlFor = "review-rating-4" className = "rating__label"></label>
                        <input type = "radio"
                               name = "review-rating"
                               className = "rating__item"
                               value = "3"
                               id = "review-rating-3"
                               onChange = {(event) => setReviewRating(event.target.value)}
                        />
                        <label htmlFor = "review-rating-3" className = "rating__label"></label>
                        <input type = "radio"
                               name = "review-rating"
                               className = "rating__item"
                               value = "2"
                               id = "review-rating-2"
                               onChange = {(event) => setReviewRating(event.target.value)}
                        />
                        <label htmlFor = "review-rating-2" className = "rating__label"></label>
                        <input type = "radio"
                               name = "review-rating"
                               className = "rating__item"
                               value = "1" 
                               id = "review-rating-1"
                               onChange = {(event) => setReviewRating(event.target.value)}
                               defaultChecked
                        />
                        <label htmlFor = "review-rating-1" className = "rating__label"></label>
                    </div>
                </div>
                <Formik
                    initialValues = {{name: "", review: ""}}
                    validationSchema = {validationSchema}
                    validateOnMount
                    onSubmit = {(values) => {
                        dispatch(sendReview({id: id, 
                                            name: values.name,
                                            text: values.review,
                                            rating: reviewRating
                                        }));
                    }}
                >
                   {props => { 
                       return (
                       <Form className = "review-modal-form">
                            <Field
                                type = "text"
                                className = "review-input"
                                name = "name"
                                placeholder = "Имя"
                                data-test-id = "review-name-field"
                            />
                            <ErrorMessage name = "name">
                                {errorMsg => <div className = "error-name">{errorMsg}</div>}
                            </ErrorMessage>
                            <Field rows = {15}
                                    as = "textarea"
                                    className = "review-textarea"
                                    name = "review"
                                    placeholder = "Комментарий"
                                    data-test-id = "review-text-field"
                            ></Field>
                            <ErrorMessage name = "review">
                                {errorMsg => <div className = "error-review">{errorMsg}</div>}
                            </ErrorMessage>
                            <button disabled = {!props.isValid || isReviewSendLoading}
                                    className = "send-review-btn"
                                    type = "submit"
                                    data-test-id = "review-submit-button"
                            >
                            {isReviewSendLoading ? <Oval color = "#ffffff" height = {30} width = {30}/> : "Send"}
                            </button>
                            {isReviewSendError && <div className="error-response-review">Ошибка при отправке отзыва</div>}
                        </Form>
                    )}}
                </Formik>
            </div>
        </div>
    );
}

export default ReviewModalWindow;