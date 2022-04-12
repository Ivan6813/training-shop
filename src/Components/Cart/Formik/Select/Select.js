import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError/TextError";
import "./Select.scss";

function Select(props) {

    const {name, options, ...rest} = props;

    return (
        <>
            <Field as = "select" name = {name} {...rest}>
                {options.map(option => {
                    return (
                        <option key = {option.id} value = {option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <ErrorMessage name = {name} component = {TextError}/>
        </>
    )
}

export default Select;