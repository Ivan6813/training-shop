import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import {radioPayment} from "../../../constants/constants";
import FormikControl from "../Formik/FormikControl";
import { savePaymentFormData, addOrderFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Payment-info.scss";

function PaymentInfo({paymentFormik, setPaymentMethod}) {

    const {paymentFormData} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const initialValues = {
        paymentMethod: "visa",
        cashEmail: "",
        card: "",
        cardDate: "",
        cardCVV: ""
    };

    const validationSchema = yup.object({
        paymentMethod: yup.string().trim(),
        cashEmail: yup.string().trim().required("required"),
        card: yup.string().trim(),
        cardDate: yup.string().trim(),
        cardCVV: yup.string().trim(),
        
    });

    const onSubmit = values => {
        dispatch(savePaymentFormData(values));
        dispatch(addOrderFormData(values));
    }

    function setPayMethod(event) {
        if(event.target.checked) {
            return setPaymentMethod(event.target.value);
        }
    }

    return (
        <div className = "payment-block">
            <div className = "cart-container">
                <Formik
                    initialValues = {paymentFormData || initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit}
                    enableReinitialize
                    innerRef = {paymentFormik}
                >
                {formik => (
                    <Form id = "payment-form">
                        <FormikControl
                            control = "radio"
                            name = "paymentMethod"
                            label = "Method of payments"
                            options = {radioPayment}
                            onClick = {(event) => {setPayMethod(event)}}
                        />
                        {formik.values.paymentMethod === "payPal" 
                        && 
                        <div className = "customer-info">
                            <div className = "customer-info-params">E-mail</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "cashEmail"
                                placeholder = "E-mail"
                                className = "customer-info-input"
                            />
                        </div>
                        }
                        {(formik.values.paymentMethod === "visa" || formik.values.paymentMethod === "master card")
                        &&
                        <div className = "customer-info">
                            <div className = "customer-info-params">Card</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "card"
                                placeholder = "____ ____ ____ ____"
                                className = "customer-info-input customer-params-input"
                            />
                            <div className = "customer-card-info">
                                <FormikControl
                                    control = "input"
                                    type = "text"
                                    name = "cardDate"
                                    placeholder = "YY/MM"
                                    className = "customer-info-input"
                                />
                                <FormikControl
                                    control = "input"
                                    type = "text"
                                    name = "cardCVV"
                                    placeholder = "CVV"
                                    className = "customer-info-input customer-cvv-input"
                                />
                            </div>
                        </div>}
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default PaymentInfo;