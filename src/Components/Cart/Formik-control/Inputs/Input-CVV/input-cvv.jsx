import {useState} from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import NumberFormat from "react-number-format";
import TextError from "../../text-error/text-error";
import "./input-cvv.scss";

const InputCvv = ({name, errors, touched}) => {

    const [cvvHidden, setCvvHidden] = useState(false);
    let type = cvvHidden ? "text" : "password";

    return (
        <div className = "cart-input-block">
            <Field name = {name}>
                {({field}) => (
                    <NumberFormat 
                        className = {classNames("input-cvv-hidden", {
                            input_cvv_error: errors[name] && touched[name],
                            input_cvv_visible: cvvHidden
                        })}
                        {...field}
                        type = {type}
                        placeholder = "CVV"
                        autoComplete = "off"
                    />
                )}
            </Field>
            <button 
                className = {classNames("input-cvv-btn", {show_CVV: cvvHidden})}
                type = "button"
                onClick = {() => setCvvHidden(!cvvHidden)}
            ></button>
            <ErrorMessage name = {name} component = {TextError}/>
        </div>
    )
};

export default InputCvv;