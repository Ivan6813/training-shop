import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import NumberFormat from "react-number-format";
import TextError from "../../text-error/text-error";
import "./input-mask.scss";

const InputMask = ({name, errors, touched, mask, ...rest}) => (

    <div className = "input-mask_block">
        <Field name = {name}>
            {({field}) => (
                <NumberFormat 
                    mask = {mask}
                    className = {classNames("input-mask", {
                        cart_input_error: errors[name] && touched[name]
                    })}
                    {...field}
                    {...rest}
                />
            )}
        </Field>
        <ErrorMessage name = {name} component = {TextError}/>
    </div>
);

export default InputMask;