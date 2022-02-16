import React from "react";
import mainImg from "../../../img/product-page-select-img.png";
import product_img_1 from "../../../img/product-page-img-1.png";
import product_img_2 from "../../../img/product-page-img-2.png";
import product_img_3 from "../../../img/product-page-img-3.png";
import product_img_4 from "../../../img/product-page-img-4.png";
import "./Product-slider.scss";

function ProductSlider() {

    return (
        <div className = "container">
            <div className = "product-slider-block">
               <div className = "product-slider-items">
                   <div className = "wrapper-product-slider-items">
                        <div className = "slider-item-women">
                            <button className = "product-slider-btn-left small"></button>
                            <button className = "product-slider-btn-right small"></button>
                        </div>
                        <img className = "product-img" src = {product_img_1} alt = "" />
                        <img className = "product-img" src = {product_img_2} alt = "" />
                        <img className = "product-img" src = {product_img_3} alt = "" />
                        <img className = "product-img" src = {product_img_4} alt = "" />
                   </div>
               </div>
               <div className = "product-slider-select-item">
                   <img src = {mainImg} className = "product-select-img" alt = "img" />
                   <div className = "product-slider-button-block">
                       <button className = "product-slider-btn-left"></button>
                       <button className = "product-slider-btn-right"></button>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default ProductSlider;