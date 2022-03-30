import React, {useEffect} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {Oval} from "react-loader-spinner";
import "./Review-form.scss";
import { useDispatch, useSelector } from "react-redux";
import { sendReview, getProducts, closeReviewWindow } from "../../../../redux/actions";

function ReviewForm({id, reviewRating}) {

    const {isReviewSendLoading, isReviewSendSuccess, isReviewSendError} = useSelector(state => state.review);
    const dispatch = useDispatch();

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
                        <Field type = "text"
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
                        />
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
                        {isReviewSendError && <div className = "error-response-review">Ошибка при отправке отзыва</div>}
                    </Form>
                )}}
        </Formik>
    );
}

export default ReviewForm;