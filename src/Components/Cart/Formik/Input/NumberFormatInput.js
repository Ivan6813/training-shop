import React from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../TextError/TextError";
import NumberFormat from 'react-number-format';
import "./Input.scss";


function NumberFormatInput(props) {

    const {name, formik, mask, ...rest} = props;

    return (
        <div className = "cart-input-block">
            <Field name = {name}>
                {({field}) => {
                    return (
                        <NumberFormat 
                            mask = {mask}
                            className = {classNames("number-fomat-input", {
                                customer_info_input_error : formik?.errors[name] && formik?.touched[name]
                            })}
                            {...field}
                            {...rest}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name = {name} component = {TextError}/>
        </div>
    )
}

export default NumberFormatInput;