import React from "react";
import ProductInfo from "./Product-info/Product-info";
import ProductColor from "./Product-color/Product-color";
import ProductHeader from "./Product-header/Product-header";
import "./Product-page.scss";
import ProductPrice from "./Product-price/Product-price";
import ProductSize from "./Product-size/Product-size";
import ProductSlider from "./Product-slider/Product-slider";
import PayWith from "./Pay-with/Pay-with";
import ProductDescription from "./Product-description/Product-description";
import AdditinalInfo from "./Additional-info/Additional-info";
import Reviews from "./Reviews/Reviews";
import RelatedProducts from "./Related-products/Related-products";

function ProductPage() {

    return (
        <div>
            <ProductHeader/>
            <div className = "container">
                <div className = "product-page">
                    <ProductSlider/>
                    <div className = "product-page-info">
                        <ProductColor/>
                        <ProductSize/>
                        <ProductPrice/>
                        <ProductInfo/>
                        <PayWith/>
                        <ProductDescription/>
                        <AdditinalInfo/>
                        <Reviews/>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    );
}

export default ProductPage;