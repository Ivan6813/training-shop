import {Formik, Form} from "formik";
import {useDispatch, useSelector} from "react-redux";
import FormikControl from "../formik-control/formik-control";
import validationSchema from "./validation-schema";
import {radioPayment, paymentMethods, inputTypes} from "../../../constants/constants";
import {savePaymentFormData, sendOrder} from "../../../redux/actions";
import "./payment-info.scss";

const PaymentInfo = ({paymentFormik, setPaymentMethod, cartSection, setCartSection}) => {

    const {paymentFormData, orderFormData} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const initialValues = {
        paymentMethod: paymentMethods.visa,
        cashEmail: "",
        card: "",
        cardDate: "",
        cardCVV: ""
    };

    const onSubmit = (values) => {
        dispatch(savePaymentFormData(values));
        if(paymentFormik.current?.isValid) {
            if(values.paymentMethod === paymentMethods.visa || 
                values.paymentMethod === paymentMethods.master
            ) {
                values.paymentMethod = "card";
                dispatch(sendOrder({...values, ...orderFormData}));
                setCartSection(cartSection + 1);
            }else {
                dispatch(sendOrder({...values, ...orderFormData}));
                setCartSection(cartSection + 1);
            }
        }
    };

    const limitMonthValue = (val, max) => {
        if(val.length === 1 && val[0] > max[0]) {
          val = "0" + val;
        }
        if(val.length === 2) {
          if(Number(val) === 0) {
            val = "01";
          }else if(val > max) {
            val = max;
          }
        }
        return val;
    };

    const cardExpiry = (val) => {
        let month = limitMonthValue(val.substring(0, 2), "12");
        let year = val.substring(2, 4);
        return month + (year.length ? "/" + year : "");
    };

    const setPayMethod = (event) => {
        if(event.target.checked) {
            setPaymentMethod(event.target.value);
        }
    };

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
                {({values, errors, touched}) => (
                    <Form>
                        <FormikControl
                            control = {inputTypes.radio}
                            name = "paymentMethod"
                            label = "Method of payments"
                            options = {radioPayment}
                            onClick = {setPayMethod}
                        />
                        {values.paymentMethod === paymentMethods.payPal 
                        && 
                        <div className = "customer-info">
                            <label className = "customer-info-params">E-mail</label>
                            <FormikControl
                                control = {inputTypes.input}
                                type = "text"
                                name = "cashEmail"
                                placeholder = "E-mail"
                                errors = {errors}
                                touched = {touched}
                            />
                        </div>
                        }
                        {(values.paymentMethod === paymentMethods.visa
                        || 
                        values.paymentMethod === paymentMethods.master)
                        &&
                        <div className = "customer-info">
                            <label className = "customer-info-params">Card</label>
                            <FormikControl
                                control = {inputTypes.mask}
                                type = "tel"
                                name = "card"
                                placeholder = "____ ____ ____ ____"
                                format = "#### #### #### ####"
                                mask = "_"
                                errors = {errors}
                                touched = {touched}
                            />
                            <div className = "small-input-block">
                                <div className = "small-input">
                                    <FormikControl
                                        control = {inputTypes.mask}
                                        type = "tel"
                                        name = "cardDate"
                                        placeholder = "MM/YY"
                                        format = {cardExpiry}
                                        mask = "_"
                                        errors = {errors}
                                        touched = {touched}
                                    />
                                </div>
                                <div className = "small-input">
                                    <FormikControl
                                        control = {inputTypes.cvv}
                                        name = "cardCVV"
                                        errors = {errors}
                                        touched = {touched}
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
};

export default PaymentInfo;