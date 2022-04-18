import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {addOrder, removeOrder} from "../../../redux/actions/index";
import product_price_heart from "../../../img/product-price-heart.svg";
import product_price_scales from "../../../img/product-price-scales.svg";
import "./product-price.scss";

const ProductPrice = ({product, selectedSize, selectedItemImg}) => {

    const [availabilityInCart, setAvailabilityInCart] = useState(false);
    const {order} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const addCartItem = () => {
        const cartItem = {
            id: uuidv4(),
            name: product.name,
            color: selectedItemImg.color,
            size: product.sizes[selectedSize],
            price: product.price,
            img: selectedItemImg.url
        };
        return dispatch(addOrder(cartItem));
    };

    const removeCartItem = () => {
        let itemId = "";
        order.forEach(({id, name, color, size, price}) => {
            if(name === product.name 
               &&
               color === selectedItemImg.color
               &&
               size === product.sizes[selectedSize]
               &&
               price === product.price
            ){
                itemId = id;
            }
        });
        const newOrder = order.filter(item => item.id !== itemId);
        return dispatch(removeOrder(newOrder));
    };
    
    const cartBtnHandler = () => {
        if(availabilityInCart) {
            removeCartItem();
        }else {
            addCartItem();
        }
    };

    useEffect(() => {
        setAvailabilityInCart(order.some(({name, color, size, price}) => {
            return (
                name === product.name
                &&
                color ===  selectedItemImg.color
                &&
                size === product.sizes[selectedSize] 
                &&
                price === product.price
            )
        }));
    },[order, selectedSize, selectedItemImg]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className = "product-price-block">
            <div className = "product-price">
                $ {product.price}
            </div>
            <button 
                onClick={cartBtnHandler}
                className = "add-cart-btn"
                data-test-id = "add-cart-button"
            >
                {availabilityInCart ? "Remove from cart" : "Add to cart"}
            </button>
            <img 
                className = "product-price-heart" 
                src = {product_price_heart} 
                alt = "icon"
            />
            <img 
                className = "product-price-scales" 
                src = {product_price_scales} 
                alt = "icon"
            />
        </div>
    );
};

export default ProductPrice;