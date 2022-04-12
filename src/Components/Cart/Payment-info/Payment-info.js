import React, { useRef } from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import {radioPayment, regexEmail, regexCard, regexCardCVV} from "../../../constants/constants";
import FormikControl from "../Formik/FormikControl";
import { savePaymentFormData, addOrderFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import classNames from "classnames";
import { parse, isDate } from "date-fns";
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

    function limitMonthValue(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
          val = '0' + val;
        }
        if (val.length === 2) {
          if (Number(val) === 0) {
            val = '01';
          } else if (val > max) {
            val = max;
          }
        }
        return val;
    }

    function cardExpiry(val) {
        let month = limitMonthValue(val.substring(0, 2), '12');
        let year = val.substring(2, 4);
        return month + (year.length ? '/' + year : '');
    }

    function validateCardDate(value) {
        const today = new Date();
        const parsedDate = isDate(value)
          ? value
          : parse(value, "MM/yy", new Date());
      
        return parsedDate > today;
    }

    const validationSchema = yup.object({
        paymentMethod: yup.string(),
        cashEmail: yup.string().when('paymentMethod', {
            is: "paypal",
            then: yup
                .string()
                .trim()
                .matches(regexEmail, "Неверный формат")
                .required("Поле должно быть заполнено"),
        }),
        card: yup.string().when('paymentMethod', {
            is: "card",
            then: yup
                .string()
                .matches(regexCard, "Должно быть ровно 16 символов")
                .required("Поле должно быть заполнено"),
        }),
        cardDate: yup.string().when('paymentMethod', {
            is: "card",
            then: yup
                .string()
                .test("cardDate", "Неверная дата", value => validateCardDate(value))
                .required("Поле должно быть заполнено"),
        }),
        cardCVV: yup.string().when('paymentMethod', {
            is: "card",
            then: yup
                .string()
                .matches(regexCardCVV, "Должно быть 3-4 символа")
                .required("Поле должно быть заполнено"),
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
                                        placeholder = "MM/YY"
                                        format={cardExpiry}
                                        mask = "_"
                                        formik = {formik}
                                    />
                                </div>
                                <div className = "small-input input-cart-cvv">
                                    <FormikControl
                                        control = "numberFormatInput"
                                        type = "password"
                                        name = "cardCVV"
                                        placeholder = "CVV"
                                        autoComplete = "off"
                                        // format = "####"
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