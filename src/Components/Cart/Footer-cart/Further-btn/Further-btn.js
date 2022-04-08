import React from "react";
import { useDispatch } from "react-redux";
import { addOrderFormData } from "../../../../redux/actions";
import "./Further-btn.scss";

function FurtherBtn({cartSection, setCartSection, deliveryFormik, order, totalPrice}) {

    const dispatch = useDispatch()

    const products = order.map(item => {
        return {
            name: item.name, 
            size: item.size, 
            color: item.color,
            quantity: item.quantity
        };
    });

    function changeSection() {
        if(cartSection === 0) {
            dispatch(addOrderFormData({products: products, totalPrice: totalPrice}))
            setCartSection(cartSection + 1); 
        }else {
            deliveryFormik.current?.submitForm();
            if(deliveryFormik.current?.dirty && deliveryFormik.current?.isValid) {
                setCartSection(cartSection + 1);
            }
        }
    }

    return (
        <button 
            onClick = {() => changeSection()} 
            className = "cart-btn-black"
            type = "button"
        >
            Further
        </button>
    );
}

export default FurtherBtn;