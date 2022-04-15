import React from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../TextError/TextError";
import "./Checkbox.scss";

function Checkbox({name, value, formik, ...rest}) {

    return (
        <div className = "consent-form">
            <Field name = {name} {...rest}>
                {({field}) => {
                    return (
                        <label
                            className = {classNames("consent-form-label custom-checkbox", {
                                custom_checkbox_error : formik?.errors[name] && formik?.touched[name]
                            })}
                        >
                            <input 
                                type = "checkbox" 
                                {...field}
                                checked = {value}
                                value = {value}
                            />
                            <span>I agree to the processing of my personal information</span>
                        </label>
                    )
                }}
            </Field>
            <ErrorMessage name = {name} component = {TextError}/>
        </div>
    )
}

export default Checkbox;