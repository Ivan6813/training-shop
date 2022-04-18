import classNames from "classnames";

const CartBtn = ({text, handle, bg}) => (

    <button 
        onClick = {handle} 
        className = {classNames("cart-btn-black", {
            cart_btn_grey: bg === "grey"
        })}
        type = "button"
    >
        {text}
    </button>
);

export default CartBtn;