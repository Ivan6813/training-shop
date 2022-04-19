import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import {useSelector} from "react-redux";
import TextError from "../../text-error/text-error";
import "./input-dropdown.scss";

const InputDropdown = ({
    name, 
    setFieldValue, 
    errors, 
    touched, 
    isOpenDropdown, 
    setIsOpenDropdown
}) => {

    const {countriesRequestError, countries} = useSelector(state => state.order);

    const openCountriesList = (event) => {
        event.stopPropagation();
        setIsOpenDropdown(!isOpenDropdown);
    };

    const selectCountry = (event) => {
        event.stopPropagation();
        setFieldValue("country", event.target.textContent);
        setIsOpenDropdown(false);
    };

    return (
        <div 
            className = {classNames("input-dropdown_block", {
                dropdown_block_shadow: isOpenDropdown
            })}
        >
            <Field 
                type = "text"
                name = {name} 
                className = {classNames("input-dropdown", {
                    input_dropdown_error: errors[name] && touched[name]
                })}
                onClick = {openCountriesList}
                placeholder = "Country"
                readOnly 
            />
            <span 
                className = {classNames("arrow-icon", {
                    dropdown_open: isOpenDropdown
                })}
            />
            {isOpenDropdown && 
            <ul className = "countries-list">
                {countries.map(({name, _id}) => (
                    <li 
                        className = "countries-item"
                        key = {_id}
                        onClick = {selectCountry}
                    >
                        {name}
                    </li>
                ))}
            </ul>}
            {countriesRequestError ?
            <div className = "cart-text-error">{countriesRequestError}</div>
            :
            <ErrorMessage name = {name} component = {TextError}/>
            }
        </div>
    )
};

export default InputDropdown;