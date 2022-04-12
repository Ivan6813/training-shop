import React, { useRef } from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import {radioPayment, regexEmail} from "../../../constants/constants";
import FormikControl from "../Formik/FormikControl";
import { savePaymentFormData, addOrderFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import classNames from "classnames";
import "./Payment-info.scss";

function PaymentInfo({paymentFormik, setPaymentMethod}) {

    const {paymentFormData} = useSelector(state => state.order);
    // const inputCVV = useRef();
    const dispatch = useDispatch();

    const initialValues = {
        paymentMethod: "card",
        cashEmail: "",
        card: "",
        cardDate: "",
        cardCVV: ""
    };

    const validationSchema = yup.object({
        paymentMethod: yup.string(),
        cashEmail: yup.string().when('paymentMethod', {
            is: "paypal",
            then: yup.string()
                .trim()
                .matches(regexEmail, "Неверный формат")
                .required("Поле должно быть заполнено"),
        }),
        card: yup.string().when('paymentMethod', {
            is: "card",
            then: yup.string().trim().required("Поле должно быть заполнено"),
        }),
        cardDate: yup.string().when('paymentMethod', {
            is: "card",
            then: yup.string().required("Поле должно быть заполнено"),
        }),
        cardCVV: yup.string().when('paymentMethod', {
            is: "card",
            then: yup.string().trim().required("Поле должно быть заполнено"),
        }),
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
                    validateOnMount = {true}
                    enableReinitialize
                    innerRef = {paymentFormik}
                >
                {formik => (
                    <Form>
                        <FormikControl
                            control = "radio"
                            name = "paymentMethod"
                            label = "Method of payments"
                            options = {radioPayment}
                            onClick = {(event) => {setPayMethod(event)}}
                        />
                        {formik.values.paymentMethod === "paypal" 
                        && 
                        <div className = "customer-info">
                            <div className = "customer-info-params">E-mail</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "cashEmail"
                                placeholder = "E-mail"
                                formik = {formik}
                            />
                        </div>
                        }
                        {(formik.values.paymentMethod === "card")
                        &&
                        <div className = "customer-info">
                            <div className = "customer-info-params">Card</div>
                            <FormikControl
                                control = "numberFormatInput"
                                type = "tel"
                                name = "card"
                                placeholder = "____ ____ ____ ____"
                                format = "#### #### #### ####"
                                mask = "_"
                                formik = {formik}
                            />
                            <div className = "small-input-block">
                                <div className = "small-input">
                                    <FormikControl
                                        control = "numberFormatInput"
                                        type = "tel"
                                        name = "cardDate"
                                        placeholder = "YY/MM"
                                        format = "##/##"
                                        mask = "_"
                                        formik = {formik}
                                    />
                                </div>
                                <div className = "small-input input-cart-cvv">
                                    <FormikControl
                                        control = "input"
                                        type = "password"
                                        name = "cardCVV"
                                        placeholder = "CVV"
                                        autoComplete = "off"
                                        // innerRef = {inputCVV}
                                        formik = {formik}
                                        // inputCVV = {inputCVV}
                                        // className = {classNames("custom-input", {
                                        //     customer_info_input_error : formik?.errors["cardCVV"] && formik?.touched["cardCVV"]
                                        // })}
                                    />
                                </div>
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