import React from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../../TextError/TextError";
import NumberFormat from "react-number-format";
import "./Input-mask.scss";


function InputMask({name, formik, mask, ...rest}) {

    return (
        <div className = "input-mask_block">
            <Field name = {name}>
                {({field}) => {
                    return (
                        <NumberFormat 
                            mask = {mask}
                            className = {classNames("input-mask", {
                                cart_input_error: formik?.errors[name] && formik?.touched[name]
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

export default InputMask;