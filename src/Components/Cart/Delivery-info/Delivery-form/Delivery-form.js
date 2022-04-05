import React from "react";
import { dropDownStoreAdress, radioDelivery } from "../../../../constants/constants";
import FormikControl from "../../Formik/FormikControl";


function DeliveryForm({deliveryMethod}) {

    return (
        <>
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
            <div className = "customer-info">
                <div className = "customer-info-params">Adress</div>
                <FormikControl
                    control = "input"
                    type = "text"
                    name = "country"
                    placeholder = "Country"
                    className = "customer-info-input customer-params-input"
                />
                {deliveryMethod !== "store pickup" ?
                    <>
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
                    </>
                :
                    <FormikControl
                        control = "select"
                        name = "storeAdress"
                        options = {dropDownStoreAdress}
                        className = "customer-store-adress"
                    />
                }
            </div>
            {deliveryMethod === "pickup from post offices" 
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
                name = "agree"
            />
        </>
    );
}

export default DeliveryForm;