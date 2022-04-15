import React, {useState, useEffect} from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../../TextError/TextError";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clearCities, getCities } from "../../../../../redux/actions/index";
import "./Input-search.scss";

function InputSearch({name, formik, isOpenCitiesList, setIsOpenCitiesList}) {

    const {citiesRequestError, cities} = useSelector(state => state.order);
    const [citiesList, setCitiesList] = useState(cities);
    const dispatch = useDispatch();

    useEffect(() => {
        setCitiesList(cities);
    },[cities]);

    function findCity(event) {
        if(event.target.value.length === 3 && cities.length === 0) {
           dispatch(getCities({
               city: event.target.value,
               country: formik.values.country
            }));
            setIsOpenCitiesList(true);
        }else if(event.target.value.length >= 3 && cities.length !== 0) {
            setCitiesList(cities.filter(item => {
                return item.city.toLowerCase().includes(event.target.value.toLowerCase());
            }));
        }else if(event.target.value.length < 3 && cities.length !== 0) {
            setIsOpenCitiesList(false);
            dispatch(clearCities());
        }
    }

    function selectCity(event) {
        formik.setFieldValue("storeAdress", event.target.textContent);
        setIsOpenCitiesList(false);
    }

    function openCitiesList(event) {
        event.stopPropagation();
        if(event.target.value.length >= 3 && cities.length !== 0) {
            setIsOpenCitiesList(true);
        }
    }

    return (
        <div 
            className = {classNames("input-search_block", {
                input_search_block_shadow: isOpenCitiesList
            })}
        >
            <Field 
                type = "text"
                name = {name} 
                className = {classNames("input-search", {
                    input_search_error: formik?.errors[name] && formik?.touched[name]
                })}
                onKeyUp = {(event) => findCity(event)}
                onClick = {(event) => openCitiesList(event)}
                placeholder = "Store adress"
                disabled = {formik.values.country === ""}
            />
            {isOpenCitiesList && 
            <ul className = "cities-list">
                {citiesList.map(option => {
                    return (
                        <li 
                            className = "cities-item"
                            key = {option._id}
                            onClick = {(event) => selectCity(event)}
                        >
                            {option.city}
                        </li>
                    )
                })}
            </ul>}
            {citiesRequestError === "" ?
            <>
                <ErrorMessage name = {name} component = {TextError}/>
                <div 
                    className = {classNames("input-search-subtext", {
                        input_search_subtext_hidden : formik?.errors[name] && formik?.touched[name]
                    })}
                >
                    Введите город и выберите магазин из списка
                </div>
            </>
            :
            <div className = "cart-text-error">{citiesRequestError}</div>
            }
        </div>
    )
}

export default InputSearch;