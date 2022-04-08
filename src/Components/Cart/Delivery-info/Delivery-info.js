import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import FormikControl from "../Formik/FormikControl";
import { dropDownStoreAdress, radioDelivery } from "../../../constants/constants";
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
        storeAdress: ""
    };

    const validationSchema = yup.object({
        deliveryMethod: yup.string(),
        phone: yup.string().trim().required("required"),
        email: yup.string().trim().required("required"),
        country: yup.string().trim().required("required"),
        city: yup.string().trim().required("required"),
        street: yup.string().trim().required("required"),
        house: yup.string().trim().required("required"),
        apartment: yup.string().trim(),
        postcode: yup.string().trim().required("required"),
        storeAdress: yup.string().trim(),
        agree: yup.boolean(),
        
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
                                control = "input"
                                type = "text"
                                name = "phone"
                                placeholder = "+375 (__) _______"
                                className = "customer-info-input"
                            />
                        </div>
                        <div className = "customer-info">
                            <div className = "customer-info-params">E-mail</div>
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "email"
                                placeholder = "E-mail"
                                className = "customer-info-input"
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
                                className = "customer-info-input customer-params-input"
                            />
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "city"
                                placeholder = "City"
                                className = "customer-info-input customer-params-input"
                            />
                            <FormikControl
                                control = "input"
                                type = "text"
                                name = "street"
                                placeholder = "Street"
                                className = "customer-info-input customer-params-input"
                            />
                            <div className="customer-adress">
                                <FormikControl
                                    control = "input"
                                    type = "text"
                                    name = "house"
                                    placeholder = "House"
                                    className = "customer-info-input customer-adress-input"
                                />
                                <FormikControl
                                    control = "input"
                                    type = "text"
                                    name = "apartment"
                                    placeholder = "Apartment"
                                    className = "customer-info-input"
                                />
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
                                className = "customer-info-input customer-params-input"
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
                                control = "input"
                                type = "text"
                                name = "postcode"
                                placeholder = "BY ______"
                                className = "customer-info-input"
                            />
                        </div>
                        }
                        <FormikControl
                            control = "checkbox"
                            // name = "agree"
                            defaultChecked = {formik.values.agree}
                            // checked = {formik.isValid && formik.dirty}
                            // value = {formik.values.agree}
                        />
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default DeliveryInfo;