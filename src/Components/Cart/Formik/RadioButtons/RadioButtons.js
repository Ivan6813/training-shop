import React from "react";
import {Field} from "formik";
import "./RadioButtons.scss";

function RadioButtons(props) {

    const {name, label, options, onClick, ...rest} = props;

    return (
        <div className = "methods">
            <label className = "methods-title">{label}</label>
            <Field name = {name} {...rest}>
                {({field}) => {
                    return options.map((option, index) => {
                        return (
                            <div className = "methods-item" key = {option.id}>
                                <label className = "methods-label custom-radio">
                                    <input 
                                        type = "radio"
                                        defaultChecked = {field.value === option.value} 
                                        {...field}
                                        value = {option.value}
                                        onClick = {onClick}
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