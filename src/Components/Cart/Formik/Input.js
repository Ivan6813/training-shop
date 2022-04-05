import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./TextError";

function Input(props) {

    const {name, ...rest} = props;

    return (
        <>
            <Field name = {name} {...rest}/>
            <ErrorMessage name = {name} component = {TextError}/>
        </>
    )
}

export default Input;