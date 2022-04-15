import React, {useState} from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import FormikControl from "../Formik-control/FormikControl";
import { radioDelivery, regexPhone, regexEmail } from "../../../constants/constants";
import { saveDeliveryFormData, addOrderFormData, getCountries } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Delivery-info.scss";

function DeliveryInfo({deliveryFormik}) {

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenCitiesList, setIsOpenCitiesList] = useState(false);
    const {deliveryFormData, countries, cities} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const initialValues = {
        deliveryMethod: "pickup from post offices",
        phone: "",
        email: "",
        country: "",
        city: "",
        street: "",
        house: "",
        apartment: "",
        postcode : "",
        storeAddress: "",
        agree: false
    };

    const validationSchema = yup.object({
        deliveryMethod: yup.string(),
        phone: yup
            .string()
            .trim()
            .matches(regexPhone, "Проверьте код оператора")
            .required("Поле должно быть заполнено"),
        email: yup
            .string()
            .trim()
            .matches(regexEmail, "Неверный формат")
            .required("Поле должно быть заполнено"),
        country: yup.string().trim().required("Поле должно быть заполнено"),
        city: yup.string().when("deliveryMethod", {
            is: (value => value === "pickup from post offices" || value === "express delivery"),
            then: yup.string().trim().required("Поле должно быть заполнено")
        }),
        street: yup.string().when("deliveryMethod", {
            is: (value => value === "pickup from post offices" || value === "express delivery"),
            then: yup.string().trim().required("Поле должно быть заполнено")
        }),
        house: yup.string().when("deliveryMethod", {
            is: (value => value === "pickup from post offices" || value === "express delivery"),
            then: yup.string().trim().required("Поле должно быть заполнено")
        }),
        apartment: yup.string().trim(),
        postcode: yup.string().when("deliveryMethod", {
            is: "pickup from post offices",
            then: yup.string().trim().required("Поле должно быть заполнено")
        }),
        storeAddress: yup.string().when("deliveryMethod", {
            is: "store pickup",
            then: yup
                .string()
                .trim()
                .required("Поле должно быть заполнено")
                .test("storeAddress", "Указанный город не найден", value => {
                    return cities.some(item => item.city === value)
                })
        }),
        agree: yup.bool().oneOf([true], "Вы должны согласиться на обработку личной информации")
    });

    const onSubmit = values => {
        dispatch(saveDeliveryFormData(values));
        dispatch(addOrderFormData(values));
    }

    function countriesList(event) {
        if(event.target.checked && event.target.value === "store pickup") {
            if(countries.length === 0) {
                dispatch(getCountries());
            }else {
                return;
            }
        }
    }

    function closeDropdowns() {
        setIsOpenDropdown(false);
        setIsOpenCitiesList(false);
    }

    return (
        <div 
            className = "delivery-block"
            onClick = {() => closeDropdowns()}
        >
            <div className = "cart-container">
                <Formik
                    initialValues = {deliveryFormData || initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit} 
                    enableReinitialize
                    validateOnMount = {true}
                    innerRef = {deliveryFormik}
                >
                {formik => (
                    <Form>
                        <FormikControl
                            control = "radio"
                            name = "deliveryMethod"
                            label = "Choose the method of delivery of the items"
                            options = {radioDelivery}
                            onClick = {(event) => countriesList(event)}
                        />
                        <div className = "customer-info">
                            <div className = "customer-info-params">Phone</div>
                            <FormikControl
                                control = "inputMask"
                                type = "tel"
                                name = "phone"
                                placeholder = "+375 (__) _______"
                                format = "+375 (##) ###-##-##"
                                mask = "_"
                                formik = {formik}
                            />
                        </div>
                        <div className = "customer-info">
                            <div className = "customer-info-params">E-mail</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "email"
                                placeholder = "E-mail"
                                formik = {formik}
                            />
                        </div>
                        {formik.values.deliveryMethod !== "store pickup"
                        ?
                        <div className = "customer-info">
                            <div className = "customer-info-params">Adress</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "country"
                                placeholder = "Country"
                                formik = {formik}
                            />
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "city"
                                placeholder = "City"
                                formik = {formik}
                            />
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "street"
                                placeholder = "Street"
                                formik = {formik}
                            />
                            <div className = "small-input-block">
                                <div className = "small-input">
                                    <FormikControl
                                        control = "input"
                                        type = "text"
                                        name = "house"
                                        placeholder = "House"
                                        formik = {formik}
                                    />
                                </div>
                                <div className = "small-input">
                                    <FormikControl
                                        control = "input"
                                        type = "text"
                                        name = "apartment"
                                        placeholder = "Apartment"
                                        formik = {formik}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div className = "customer-info">
                            <div className = "customer-info-params">Adress of store</div>
                            <FormikControl
                                control = "inputDropdown"
                                name = "country"
                                formik = {formik}
                                isOpenDropdown = {isOpenDropdown}
                                setIsOpenDropdown = {setIsOpenDropdown}
                            />
                            <FormikControl
                                control = "inputSearch"
                                name = "storeAddress"
                                formik = {formik}
                                isOpenCitiesList = {isOpenCitiesList}
                                setIsOpenCitiesList = {setIsOpenCitiesList}
                            />
                        </div>
                        }
                        {formik.values.deliveryMethod === "pickup from post offices" 
                        && 
                        <div className = "customer-info">
                            <div className = "customer-info-params">Postcode</div>
                            <FormikControl
                                control = "inputMask"
                                type = "tel"
                                name = "postcode"
                                placeholder = "BY ______"
                                format = "BY ######"
                                formik = {formik}
                            />
                        </div>
                        }
                        <FormikControl
                            control = "checkbox"
                            name = "agree"
                            defaultChecked = {formik.values.agree}
                            value = {formik.values.agree}
                            formik = {formik}
                        />
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default DeliveryInfo;