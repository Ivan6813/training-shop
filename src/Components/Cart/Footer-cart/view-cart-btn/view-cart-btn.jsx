import {useDispatch} from "react-redux";
import {clearFormData, saveDeliveryFormData, savePaymentFormData} from "../../../../redux/actions";
import "./view-cart-btn.scss";

const ViewCartBtn = ({clearForm, cartSection, setCartSection, deliveryFormik, paymentFormik}) => {

    const dispatch = useDispatch();

    const goToItemsSection = () => {
        if(clearForm) {
            dispatch(clearFormData());
            setCartSection(0);
        }else {
            if(cartSection === 1) {
                dispatch(saveDeliveryFormData(deliveryFormik.current?.values));
                setCartSection(0);
            }else {
                dispatch(savePaymentFormData(paymentFormik.current?.values));
                setCartSection(1);
            }
        }
    }

    return (
        <button 
            onClick = {goToItemsSection}
            className = "view-cart-btn"
            type = "button"
        >
            View Cart
        </button>
    );
};

export default ViewCartBtn;