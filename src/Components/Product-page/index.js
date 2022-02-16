import React from "react";
import ProductHeader from "./Product-header/Product-header";
import "./Product-page.scss";
import ProductSlider from "./Product-slider/Product-slider";

function ProductPage() {

    return (
        <div className = "product-page">
            <ProductHeader/>
            <div className = "wrapper-product-page">
                <ProductSlider/>
                <div className = "right-page">
                    <div className=""></div>
                </div>
            </div>
            
        </div>
    );
}

export default ProductPage;