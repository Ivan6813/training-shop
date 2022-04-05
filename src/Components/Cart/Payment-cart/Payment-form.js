import React from "react";
import {radioPayment} from "../../../constants/constants";
import FormikControl from "../Formik/FormikControl";


function PaymentForm({paymentMethod}) {

    return (
        <>
            <FormikControl
                control = "radio"
                name = "paymentMethod"
                label = "Method of payments"
                options = {radioPayment}
            />
            {paymentMethod === "payPal" 
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
            {paymentMethod === "card"
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
        </>
    );
}

export default PaymentForm;