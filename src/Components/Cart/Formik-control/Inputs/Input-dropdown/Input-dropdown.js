import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../../TextError/TextError";
import classNames from "classnames";
import { useSelector } from "react-redux";
import "./Input-dropdown.scss";

function InputDropdown({name, formik, isOpenDropdown, setIsOpenDropdown}) {

    const {countriesRequestError, countries} = useSelector(state => state.order);

    function openCountriesList() {
        setIsOpenDropdown(true);
    }

    function clickStopPropagation(event) {
        event.stopPropagation();
    }

    function selectCountry(event) {
        event.stopPropagation();
        formik.setFieldValue("country", event.target.textContent);
        setIsOpenDropdown(false);
    }

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
                    input_dropdown_error: formik?.errors[name] && formik?.touched[name]
                })}
                onFocus = {openCountriesList}
                onClick = {clickStopPropagation}
                placeholder = "Country"
                readOnly 
             />
            <span className = {classNames("arrow-icon", {dropdown_open: isOpenDropdown})}></span>
            {isOpenDropdown && 
            <ul className = "countries-list">
                {countries.map(option => {
                    return (
                        <li 
                            className = "countries-item"
                            key = {option._id}
                            onClick = {selectCountry}
                        >
                            {option.name}
                        </li>
                    )
                })}
             </ul>}
            {countriesRequestError === "" ?
            <ErrorMessage name = {name} component = {TextError}/>
            :
            <div className = "cart-text-error">{countriesRequestError}</div>
            }
        </div>
    )
}

export default InputDropdown;