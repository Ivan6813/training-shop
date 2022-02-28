import React from "react";
import "./Product-price.scss";
import product_price_heart from "../../../img/product-price-heart.svg";
import product_price_scales from "../../../img/product-price-scales.svg";


function ProductPrice({price}) {

    return (
        <div className = "product-price-block">
            <div className = "product-price">$ {price}</div>
            <button className = "add-cart-btn">Add to card</button>
            <img className = "product-price-heart" src = {product_price_heart} alt = "icon"/>
            <img className = "product-price-scales" src = {product_price_scales} alt = "icon"/>
        </div>
    );
}

export default ProductPrice;