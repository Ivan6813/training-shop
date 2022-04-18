import {useDispatch, useSelector} from "react-redux";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Oval} from "react-loader-spinner";
import validationSchema from "./validation-schema";
import {sendReview} from "../../../../redux/actions";
import "./review-form.scss";

const ReviewForm = ({id, reviewRating}) => {

    const {isReviewSendLoading, isReviewSendError} = useSelector(state => state.review);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues = {{name: "", review: ""}}
            validationSchema = {validationSchema}
            validateOnMount
            onSubmit = {({name, review}) => {
                dispatch(sendReview({
                    id: id, 
                    name: name,
                    text: review,
                    rating: reviewRating
                }));
            }}
        >
            {({isValid}) => { 
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
                        <Field 
                            rows = {15}
                            as = "textarea"
                            className = "review-textarea"
                            name = "review"
                            placeholder = "Комментарий"
                            data-test-id = "review-text-field"
                        />
                        <ErrorMessage name = "review">
                            {errorMsg => <div className = "error-review">{errorMsg}</div>}
                        </ErrorMessage>
                        <button 
                            disabled = {!isValid || isReviewSendLoading}
                            className = "send-review-btn"
                            type = "submit"
                            data-test-id = "review-submit-button"
                        >
                            {isReviewSendLoading ? (
                                <Oval color = "#ffffff" height = {30} width = {30}/>
                            ) : (
                                "Send"
                            )}
                        </button>
                        {isReviewSendError 
                        && 
                        <div className = "error-response-review">
                            Ошибка при отправке отзыва
                        </div>
                        }
                    </Form>
                )}}
        </Formik>
    );
};

export default ReviewForm;