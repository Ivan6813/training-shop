import {useDispatch} from "react-redux";
import {removeOrder, increaseQauntity, decreaseQauntity} from "../../../redux/actions/index";
import "./cart-items.scss";

const CartItems = ({order}) => {

    const dispatch = useDispatch();

    const decreaseItem = (id) => {
        const newOrder = order.map(item => {
            if(item.id === id && item.quantity > 1) {
                return {...item, quantity: item.quantity - 1};
            }else return item;
        });
        return dispatch(decreaseQauntity(newOrder));
    };

    const increaseItem = (id) => {
        const newOrder = order.map(item => {
            if(item.id === id) {
                return {...item, quantity: item.quantity + 1};
            }else return item;
        });
        return dispatch(increaseQauntity(newOrder));
    };

    const removeItem = (id) => {
        const newOrder = order.filter(item => item.id !== id);
        return dispatch(removeOrder(newOrder));
    };

    return (
        < div className = "cart-items-block">
            <div className = "cart-container">
                {order.map(({id, name, size, color, price, quantity, img}) => (
                    <div 
                        className = "cart-item-block" 
                        key = {id} 
                        data-test-id = "cart-card"
                    >
                        <img 
                            className = "cart-item-img"
                            src = {`https://training.cleverland.by/shop${img}`}
                            alt = "img"
                        />
                        <div className = "cart-item-discription">
                            <div className = "cart-item-name">
                                {name}
                            </div>
                            <div className = "cart-item-params">
                                {color}, {size}
                            </div>
                            <div className = "cart-item-info">
                                <div className = "cart-item-btn-block">
                                    <button 
                                        onClick = {() => decreaseItem(id)}
                                        className = "cart-item-btn-minus"
                                        data-test-id = "minus-product"
                                        type = "button"
                                    ></button>
                                    <div className = "cart-item-count">
                                        {quantity}
                                    </div>
                                    <button 
                                        onClick = {() => increaseItem(id)} 
                                        className = "cart-item-btn-plus"
                                        data-test-id = "plus-product"
                                        type = "button"
                                    ></button>
                                </div>
                                <div className = "cart-item-price">
                                    $ {(price*quantity).toFixed(2)}
                                </div>
                                <button 
                                    onClick = {() => removeItem(id)}
                                    className = "cart-item-delete-btn"
                                    data-test-id = "remove-product"
                                ></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItems;