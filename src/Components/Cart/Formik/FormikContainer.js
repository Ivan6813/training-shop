import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import NavBarCart from "../Nav-bar-cart/Nav-bar-cart";
import CartItems from "../Cart-items/Cart-items";
import "./FormikContainer.scss"
import DeliveryForm from "../Delivery-info/Delivery-form/Delivery-form";
import PaymentForm from "../Payment-cart/Payment-form";


function FormikContainer({order, cartSection}) {

    const products = order.map(item => {
        return {
            name: item.name, 
            size: item.size, 
            color: item.color,
            quantity: item.quantity
        };
    });

    const totalPrice = order.reduce((acc, item) => {
        acc += item.price*item.quantity;
        return acc;
    },0)

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
        agree : [],
        paymentMethod: "card",
        cashEmail: "",
        card: "",
        cardDate: "",
        cardCVV: ""
    };
    const validationSchema = yup.object({
        deliveryMethod: yup.string(),
        phone: yup.string().trim(),
        email: yup.string().trim(),
        country: yup.string().trim(),
        city: yup.string().trim(),
        street: yup.string().trim(),
        house: yup.string().trim(),
        apartment: yup.string().trim(),
        postcode: yup.string().trim(),
        storeAdress: yup.string().trim(),
        agree: yup.array(),
        paymentMethod: yup.string().trim(),
        cashEmail: yup.string().trim(),
        card: yup.string().trim(),
        cardDate: yup.string().trim(),
        cardCVV: yup.string().trim(),
        
    });
    const onSubmit = values => console.log({
        ...values, 
        products: products, 
        totalPrice: totalPrice.toString()
    });

    return (
        <div className="formik-block">
            <div className = "cart-container">
                <NavBarCart cartSection = {cartSection}/>
                {cartSection === 0 && <CartItems/>}
                <Formik
                    initialValues = {initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit}
                >
                    {props => (
                        <Form>
                            {cartSection === 1 && <DeliveryForm deliveryMethod = {props.values.deliveryMethod}/>}
                            {cartSection === 2 && <PaymentForm paymentMethod = {props.values.paymentMethod}/>}
                            <button type = "submit">Ready</button>
                        </Form>
                    )}
                </Formik>
                <div className = "order-price-block">
                    <div className = "order-price-text">Total</div>
                    <div className = "order-price">$ {totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default FormikContainer;