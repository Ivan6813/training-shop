import {Field} from "formik";
import "./radio-buttons.scss";

const RadioButtons = ({name, label, options, onClick, ...rest}) => (

    <div className = "methods">
        <label className = "methods-title">{label}</label>
        <Field name = {name} {...rest}>
            {({field}) => (
                options.map(({id, value, label, key}) => (
                    <div className = "methods-item" key = {id}>
                        <label className = "methods-label custom-radio">
                            <input 
                                type = "radio"
                                defaultChecked = {field.value === value} 
                                {...field}
                                value = {value}
                                onClick = {onClick}
                            />
                            {label === "text" && <span>{key}</span>}
                            {label === "icon" 
                            && 
                            <span>
                                <img 
                                    className = "payment-icon" 
                                    src = {key}
                                    alt = "img"
                                />
                            </span>
                            }
                        </label>
                    </div>
                ))
            )}
        </Field>
    </div>
);

export default RadioButtons;