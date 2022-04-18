const CheckOutBtn = ({paymentFormik, paymentMethod}) => {

    const submitFormData = () => {
        paymentFormik.current?.submitForm();
    };

    return (
        <button 
            onClick = {submitFormData} 
            className = "cart-btn-black"
            type = "button"
        >
            {(paymentMethod === "cash") ? "Ready" : "Check out"}
        </button>
    );
};

export default CheckOutBtn;