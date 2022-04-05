import React from "react";
import {Field} from "formik";

function Checkbox(props) {

    const {name, ...rest} = props;

    return (
        <div className = "consent-form">
            <Field name = {name} {...rest}>
                {({field}) => {
                    return (
                        <label className = "consent-form-label custom-checkbox">
                            <input 
                                type = "checkbox" 
                                {...field}
                                value = "agree"
                            />
                            <span>I agree to the processing of my personal information</span>
                        </label>
                    )
                }}
            </Field>
        </div>
    )
}

export default Checkbox;