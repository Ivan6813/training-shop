import {useState} from "react";
import {Formik, Form} from "formik";
import {useDispatch, useSelector} from "react-redux";
import FormikControl from "../formik-control/formik-control";
import validationSchema from "./validation-schema";
import {radioDelivery, deliveryMethods, inputTypes} from "../../../constants/constants";
import {saveDeliveryFormData, addOrderFormData, getCountries} from "../../../redux/actions";
import "./delivery-info.scss";

const DeliveryInfo = ({deliveryFormik}) => {

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenCitiesList, setIsOpenCitiesList] = useState(false);
    const {deliveryFormData, countries} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const initialValues = {
        deliveryMethod: deliveryMethods.postOffice,
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

    const onSubmit = (values) => {
        dispatch(saveDeliveryFormData(values));
        dispatch(addOrderFormData(values));
    };

    const countriesList = ({target}) => {
        if(target.checked && target.value === deliveryMethods.pickup) {
            if(!countries.length) {
                dispatch(getCountries());
            }else {
                return null;
            }
        }
    };

    const closeDropdowns = () => {
        setIsOpenDropdown(false);
        setIsOpenCitiesList(false);
    };

    return (
        <div 
            className = "delivery-block"
            onClick = {closeDropdowns}
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
                {({values, errors, touched, setFieldValue}) => (
                    <Form>
                        <FormikControl
                            control = {inputTypes.radio}
                            name = "deliveryMethod"
                            label = "Choose the method of delivery of the items"
                            options = {radioDelivery}
                            onClick = {countriesList}
                        />
                        <div className = "customer-info">
                            <label className = "customer-info-params">Phone</label>
                            <FormikControl
                                control = {inputTypes.mask}
                                type = "tel"
                                name = "phone"
                                placeholder = "+375 (__) _______"
                                format = "+375 (##) ###-##-##"
                                mask = "_"
                                errors = {errors}
                                touched = {touched}
                            />
                        </div>
                        <div className = "customer-info">
                            <label className = "customer-info-params">E-mail</label>
                            <FormikControl
                                control = {inputTypes.input}
                                type = "text"
                                name = "email"
                                placeholder = "E-mail"
                                errors = {errors}
                                touched = {touched}
                            />
                        </div>
                        {values.deliveryMethod !== deliveryMethods.pickup
                        ?
                        <div className = "customer-info">
                            <label className = "customer-info-params">Adress</label>
                            <FormikControl
                                control = {inputTypes.input}
                                type = "text"
                                name = "country"
                                placeholder = "Country"
                                errors = {errors}
                                touched = {touched}
                            />
                            <FormikControl
                                control = {inputTypes.input}
                                type = "text"
                                name = "city"
                                placeholder = "City"
                                errors = {errors}
                                touched = {touched}
                            />
                            <FormikControl
                                control = {inputTypes.input}
                                type = "text"
                                name = "street"
                                placeholder = "Street"
                                errors = {errors}
                                touched = {touched}
                            />
                            <div className = "small-input-block">
                                <div className = "small-input">
                                    <FormikControl
                                        control = {inputTypes.input}
                                        type = "text"
                                        name = "house"
                                        placeholder = "House"
                                        errors = {errors}
                                        touched = {touched}
                                    />
                                </div>
                                <div className = "small-input">
                                    <FormikControl
                                        control = {inputTypes.input}
                                        type = "text"
                                        name = "apartment"
                                        placeholder = "Apartment"
                                        errors = {errors}
                                        touched = {touched}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div className = "customer-info">
                            <label className = "customer-info-params">Adress of store</label>
                            <FormikControl
                                control = {inputTypes.dropdown}
                                name = "country"
                                setFieldValue = {setFieldValue}
                                errors = {errors}
                                touched = {touched}
                                isOpenDropdown = {isOpenDropdown}
                                setIsOpenDropdown = {setIsOpenDropdown}
                            />
                            <FormikControl
                                control = {inputTypes.search}
                                name = "storeAddress"
                                setFieldValue = {setFieldValue}
                                values = {values}
                                errors = {errors}
                                touched = {touched}
                                isOpenCitiesList = {isOpenCitiesList}
                                setIsOpenCitiesList = {setIsOpenCitiesList}
                            />
                        </div>
                        }
                        {values.deliveryMethod === deliveryMethods.postOffice 
                        && 
                        <div className = "customer-info">
                            <label className = "customer-info-params">Postcode</label>
                            <FormikControl
                                control = {inputTypes.mask}
                                type = "tel"
                                name = "postcode"
                                placeholder = "BY ______"
                                format = "BY ######"
                                errors = {errors}
                                touched = {touched}
                            />
                        </div>
                        }
                        <FormikControl
                            control = {inputTypes.checkbox}
                            name = "agree"
                            value = {values.agree}
                            errors = {errors}
                            touched = {touched}
                        />
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
};

export default DeliveryInfo;