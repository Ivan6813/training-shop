import {useDispatch} from "react-redux";
import {addOrderFormData} from "../../../../redux/actions";
import "./further-btn.scss";

const FurtherBtn = ({cartSection, setCartSection, deliveryFormik, order, totalPrice}) => {

    const dispatch = useDispatch()

    const products = order.map(item => {
        return {
            name: item.name, 
            size: item.size, 
            color: item.color,
            quantity: item.quantity
        };
    });

    const changeSection = () => {
        if(cartSection === 0) {
            dispatch(addOrderFormData({products: products, totalPrice: totalPrice}));
            setCartSection(cartSection + 1); 
        }else {
            deliveryFormik.current?.submitForm();
            if(deliveryFormik.current?.isValid) {
                setCartSection(cartSection + 1);
            }else {
                deliveryFormik.current?.setFieldValue("agree", false)
            }
        }
    };

    return (
        <button 
            onClick = {changeSection} 
            className = "cart-btn-black"
            type = "button"
        >
            Further
        </button>
    );
};

export default FurtherBtn;