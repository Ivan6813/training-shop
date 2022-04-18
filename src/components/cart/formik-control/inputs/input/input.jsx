import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import TextError from "../../text-error/text-error";
import "./input.scss";

const Input = ({name, errors, touched, ...rest}) => (

    <div className = "cart-input-block">
        <Field 
            name = {name} 
            className = {classNames("cart-input", {
                cart_input_error: errors[name] && touched[name]
            })}
            {...rest}
            />
        <ErrorMessage name = {name} component = {TextError}/>
    </div>
);

export default Input;