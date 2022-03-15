import React, {useState, useEffect} from "react";
import { addOrder, removeOrder } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import product_price_heart from "../../../img/product-price-heart.svg";
import product_price_scales from "../../../img/product-price-scales.svg";
import "./Product-price.scss";


function ProductPrice({product, selectedSize, selectedItemImg}) {

    const [availabilityInCart, setAvailabilityInCart] = useState(false);
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    function addCartItem() {
        const cartItem = {
            id: uuidv4(),
            name: product.name,
            color: selectedItemImg.color,
            size: product.sizes[selectedSize],
            price: product.price,
            img: selectedItemImg.url
        };
        return dispatch(addOrder(cartItem));
    }

    function removeCartItem() {
        let itemId = "";
        order.forEach(item => {
            if(item.name === product.name 
               &&
               item.color === selectedItemImg?.color
               &&
               item.size ===product.sizes[selectedSize]
               &&
               item.price === product.price
            ){
                itemId = item.id;
            }
        });
        return dispatch(removeOrder(itemId));
    }
    
    function cartBtnHandler() {
        if(availabilityInCart) {
            removeCartItem();
        }else {
            addCartItem();
        }
    }

    useEffect(() => {
        setAvailabilityInCart(order.some(item => {
            return (
                item.name === product.name
                &&
                item.color ===  selectedItemImg?.color
                &&
                item.size === product.sizes[selectedSize] 
                &&
                item.price === product.price
            )
        }));
    },[order, selectedSize, selectedItemImg]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className = "product-price-block">
            <div className = "product-price">$ {product.price}</div>
            <button onClick={() => cartBtnHandler()}
                    className = "add-cart-btn"
                    data-test-id = "add-cart-button"
            >
                {availabilityInCart ? "Remove to card" : "Add to card"}
            </button>
            <img className = "product-price-heart" src = {product_price_heart} alt = "icon"/>
            <img className = "product-price-scales" src = {product_price_scales} alt = "icon"/>
        </div>
    );
}

export default ProductPrice;