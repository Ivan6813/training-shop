import React from "react";
import { removeOrder, increaseQauntity, decreaseQauntity } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import "./Cart-items.scss";

function CartItems() {

    const {order} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        < div className = "cart-items-block">
            <div className = "cart-container">
                    {order.map(item => {
                        return (
                            <div className = "cart-item-block" key = {item.id} data-test-id = "cart-card">
                                <img className = "cart-item-img"
                                     src = {`https://training.cleverland.by/shop${item.img}`}
                                     alt = "img"
                                />
                                <div className = "cart-item-discription">
                                    <div className = "cart-item-name">{item.name}</div>
                                    <div className = "cart-item-params">{item.color}, {item.size}</div>
                                    <div className = "cart-item-info">
                                        <div className = "cart-item-btn-block">
                                            <button onClick = {() => dispatch(decreaseQauntity(item.id))}
                                                    className = "cart-item-btn-minus"
                                                    data-test-id = "minus-product"
                                            ></button>
                                                <div className = "cart-item-count">{item.quantity}</div>
                                            <button onClick = {() => dispatch(increaseQauntity(item.id))} 
                                                    className = "cart-item-btn-plus"
                                                    data-test-id = "plus-product"
                                            ></button>
                                        </div>
                                        <div className = "cart-item-price">$ {(item.price*item.quantity).toFixed(2)}</div>
                                        <button onClick = {() => dispatch(removeOrder(item.id))}
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