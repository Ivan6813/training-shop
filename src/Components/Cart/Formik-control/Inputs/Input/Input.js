import React from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../../TextError/TextError";
import "./Input.scss";


function Input({name, formik, ...rest}) {

    return (
        <div className = "cart-input-block">
            <Field 
                name = {name} 
                className = {classNames("cart-input", {
                    cart_input_error : formik?.errors[name] && formik?.touched[name]
                })}
                {...rest}
             />
            <ErrorMessage name = {name} component = {TextError}/>
        </div>
    )
}

export default Input;