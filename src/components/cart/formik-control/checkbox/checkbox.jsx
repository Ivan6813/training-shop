import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../text-error/text-error";
import "./checkbox.scss";

const Checkbox = ({name, value, errors, touched}) => (

    <div className = "consent-form">
        <label
            className = {classNames("consent-form-label custom-checkbox", {
                custom_checkbox_error: errors[name] && touched[name]
            })}
        >
            <Field
                name = {name} 
                type = "checkbox" 
                checked = {value}
                value = {value}
            />
            <span>I agree to the processing of my personal information</span>
        </label>
        <ErrorMessage name = {name} component = {TextError}/>
    </div>
);

export default Checkbox;