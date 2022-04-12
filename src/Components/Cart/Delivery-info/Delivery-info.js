import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import FormikControl from "../Formik/FormikControl";
import { dropDownStoreAdress, radioDelivery, regexPhone, regexEmail } from "../../../constants/constants";
import { saveDeliveryFormData, addOrderFormData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Delivery-info.scss";


function DeliveryInfo({deliveryFormik}) {

    const {deliveryFormData} = useSelector(state => state.order);
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
        storeAdress: "",
        agree: false
    };

    const validationSchema = yup.object({
        deliveryMethod: yup.string(),
        phone: yup.string().trim().matches(regexPhone, "Проверьте код оператора").required("Поле должно быть заполнено"),
        email: yup.string().trim().matches(regexEmail, "Неверный формат").required("Поле должно быть заполнено"),
        country: yup.string().trim().required("Поле должно быть заполнено"),
        city: yup.string().trim().required("Поле должно быть заполнено"),
        street: yup.string().trim().required("Поле должно быть заполнено"),
        house: yup.string().trim().required("Поле должно быть заполнено"),
        apartment: yup.string().trim(),
        postcode: yup.string().trim().required("Поле должно быть заполнено"),
        storeAdress: yup.string().trim(),
        agree: yup.bool().oneOf([true], "Вы должны согласиться на обработку личной информации")
    });

    const onSubmit = values => {
        dispatch(saveDeliveryFormData(values));
        dispatch(addOrderFormData(values));
    }

    return (
        <div className = "delivery-block">
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
                        />
                        <div className = "customer-info">
                            <div className = "customer-info-params">Phone</div>
                            <FormikControl
                                control = "numberFormatInput"
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
                                control = "input"
                                type = "text"
                                name = "country"
                                placeholder = "Country"
                                formik = {formik}
                            />
                            <FormikControl
                                control = "select"
                                name = "storeAdress"
                                options = {dropDownStoreAdress}
                                className = "customer-store-adress"
                            />
                        </div>
                        }
                        {formik.values.deliveryMethod === "pickup from post offices" 
                        && 
                        <div className = "customer-info">
                            <div className = "customer-info-params">Postcode</div>
                            <FormikControl
                                control = "numberFormatInput"
                                type = "tel"
                                name = "postcode"
                                placeholder = "BY ______"
                                format = "BY ######"
                                mask = "_"
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