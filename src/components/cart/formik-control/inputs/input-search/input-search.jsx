import {useState, useEffect} from "react";
import {Field, ErrorMessage} from "formik";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import TextError from "../../text-error/text-error";
import {clearCities, getCities} from "../../../../../redux/actions/index";
import "./input-search.scss";

const InputSearch = ({
    name,
    values, 
    setFieldValue, 
    errors, 
    touched, 
    isOpenCitiesList, 
    setIsOpenCitiesList
}) => {

    const {citiesRequestError, cities} = useSelector(state => state.order);
    const [citiesList, setCitiesList] = useState(cities);
    const dispatch = useDispatch();

    useEffect(() => {
        setCitiesList(cities);
    },[cities]);

    const findCity = (event) => {
        const {value} = event.target;
        if(value.length === 3 && !cities.length) {
           dispatch(getCities({
               city: value,
               country: values.country
            }));
            setIsOpenCitiesList(true);
        }else if(value.length >= 3 && cities.length) {
            setCitiesList(cities.filter(item => {
                return item.city.toLowerCase().includes(value.toLowerCase());
            }));
        }else if(value.length < 3 && cities.length) {
            setIsOpenCitiesList(false);
            dispatch(clearCities());
        }
    };

    const selectCity = ({target}) => {
        setFieldValue("storeAddress", target.textContent);
        setIsOpenCitiesList(false);
    };

    const openCitiesList = (event) => {
        event.stopPropagation();
        if(event.target.value.length >= 3 && cities.length) {
            setIsOpenCitiesList(true);
        }
    };

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
                    input_search_error: errors[name] && touched[name]
                })}
                onKeyUp = {findCity}
                onClick = {openCitiesList}
                placeholder = "Store adress"
                disabled = {!values.country}
            />
            {isOpenCitiesList && 
            <ul className = "cities-list">
                {citiesList.map(({city, _id}) => (
                    <li 
                        className = "cities-item"
                        key = {_id}
                        onClick = {selectCity}
                    >
                        {city}
                    </li>
                ))}
            </ul>}
            {!citiesRequestError ?
            <>
                <ErrorMessage name = {name} component = {TextError}/>
                <div 
                    className = {classNames("input-search-subtext", {
                        input_search_subtext_hidden: errors[name] && touched[name]
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
};

export default InputSearch;