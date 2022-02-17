import React from "react";
import "./Product-color.scss";
import product_clor_img_1 from "../../../img/product-color-img-1.png";
import product_clor_img_2 from "../../../img/product-color-img-2.png";
import product_clor_img_3 from "../../../img/product-color-img-3.png";
import product_clor_img_4 from "../../../img/product-color-img-4.png";

function ProductColor() {

    return (
        <div className = "product-color-block">
            <div className = "product-color">Color: <span>Blue</span></div>
            <div className = "product-select-color">
                <img className = "product-change-color" src = {product_clor_img_1 } alt = "icon"/>
                <img className = "product-change-color" src = {product_clor_img_2 } alt = "icon"/>
                <img className = "product-change-color" src = {product_clor_img_3 } alt = "icon"/>
                <img className = "product-change-color" src = {product_clor_img_4 } alt = "icon"/>
            </div>
            
        </div>
    );
}

export default ProductColor;