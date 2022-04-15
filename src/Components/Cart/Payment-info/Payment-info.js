import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import {radioPayment, regexEmail, regexCard, regexCardCVV} from "../../../constants/constants";
import FormikControl from "../Formik-control/FormikControl";
import { savePaymentFormData, addOrderFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { parse, isDate } from "date-fns";
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
                .required("Поле должно быть заполнено")
                .matches(regexEmail, "Неверный формат")
        }),
        card: yup.string().when('paymentMethod', {
            is: (value => value === "visa" || value === "master card"),
            then: yup
                .string()
                .required("Поле должно быть заполнено")
                .matches(regexCard, "Должно быть ровно 16 символов")
        }),
        cardDate: yup.string().when('paymentMethod', {
            is: (value => value === "visa" || value === "master card"),
            then: yup
                .string()
                .required("Поле должно быть заполнено")
                .test("cardDate", "Неверная дата", value => validateCardDate(value))
        }),
        cardCVV: yup.string().when('paymentMethod', {
            is: (value => value === "visa" || value === "master card"),
            then: yup
                .string()
                .required("Поле должно быть заполнено")
                .matches(regexCardCVV, "Должно быть 3-4 символа")
        }),
    });

    const onSubmit = values => {
        dispatch(savePaymentFormData(values));
        if(values.paymentMethod === "visa" || values.paymentMethod === "master card") {
            values.paymentMethod = "card";
            dispatch(addOrderFormData(values));
        }else {
            dispatch(addOrderFormData(values));
        }
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
                        {(formik.values.paymentMethod === "visa" 
                        || 
                        formik.values.paymentMethod === "master card")
                        &&
                        <div className = "customer-info">
                            <div className = "customer-info-params">Card</div>
                            <FormikControl
                                control = "inputMask"
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
                                        control = "inputMask"
                                        type = "tel"
                                        name = "cardDate"
                                        placeholder = "MM/YY"
                                        format={cardExpiry}
                                        mask = "_"
                                        formik = {formik}
                                    />
                                </div>
                                <div className = "small-input">
                                    <FormikControl
                                        control = "inputCVV"
                                        name = "cardCVV"
                                        formik = {formik}
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