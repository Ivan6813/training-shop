import React from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../TextError/TextError";
import "./Input.scss";


function Input(props) {

    const {name, formik, ...rest} = props;

    return (
        <div className = "cart-input-block">
            <Field 
                name = {name} 
                className = {classNames("customer-info-input", {
                    customer_info_input_error : formik?.errors[name] && formik?.touched[name]
                })}
                {...rest}
             />
            <ErrorMessage name = {name} component = {TextError}/>
        </div>
    )
}

export default Input;