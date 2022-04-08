import React from "react";
import {removeOrder, increaseQauntity, decreaseQauntity} from "../../../redux/actions/index";
import {useDispatch} from "react-redux";
import "./Cart-items.scss";

function CartItems({order}) {

    const dispatch = useDispatch();

    function decreaseItems(id) {
        return dispatch(decreaseQauntity(id));
    }

    function increaseItems(id) {
        return dispatch(increaseQauntity(id));
    }

    return (
        < div className = "cart-items-block">
            <div className = "cart-container">
                {order.map(item => {
                    return (
                        <div 
                            className = "cart-item-block" 
                            key = {item.id} 
                            data-test-id = "cart-card"
                        >
                            <img 
                                className = "cart-item-img"
                                src = {`https://training.cleverland.by/shop${item.img}`}
                                alt = "img"
                            />
                            <div className = "cart-item-discription">
                                <div className = "cart-item-name">
                                    {item.name}
                                </div>
                                <div className = "cart-item-params">
                                    {item.color}, {item.size}
                                </div>
                                <div className = "cart-item-info">
                                    <div className = "cart-item-btn-block">
                                        <button 
                                            onClick = {() => decreaseItems(item.id)}
                                            className = "cart-item-btn-minus"
                                            data-test-id = "minus-product"
                                            type = "button"
                                        ></button>
                                        <div className = "cart-item-count">
                                            {item.quantity}
                                        </div>
                                        <button 
                                            onClick = {() => increaseItems(item.id)} 
                                            className = "cart-item-btn-plus"
                                            data-test-id = "plus-product"
                                            type = "button"
                                        ></button>
                                    </div>
                                    <div className = "cart-item-price">
                                        $ {(item.price*item.quantity).toFixed(2)}
                                    </div>
                                    <button 
                                        onClick = {() => dispatch(removeOrder(item.id))}
                                        className = "cart-item-delete-btn"
                                        data-test-id = "remove-product"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CartItems;