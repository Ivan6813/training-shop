import React from "react";
import {Field} from "formik";

function RadioButtons(props) {

    const {name, label, options, onChange, ...rest} = props;

    return (
        <div className = "delivery-methods">
            <label className = "delivery-methods-title">{label}</label>
            <Field name = {name} {...rest}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <div className = "delivery-methods-item" key = {option.id}>
                                <label className = "delivery-methods-label custom-radio">
                                    <input 
                                        type = "radio" 
                                        defaultChecked = {field.value === option.value}
                                        {...field}
                                        value = {option.value}
                                    />
                                    {option.label === "text" && <span>{option.key}</span>}
                                    {option.label === "icon" 
                                    && 
                                    <span>
                                        <img 
                                            className = "payment-icon" 
                                            src = {option.key}
                                            alt = "img"
                                        />
                                    </span>
                                    }
                                </label>
                            </div>
                        )
                    })
                }}
            </Field>
        </div>
    )
}

export default RadioButtons;