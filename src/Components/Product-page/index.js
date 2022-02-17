import React from "react";
import { useParams } from "react-router-dom";
import ProductHeader from "./Product-header/Product-header";
import ProductSlider from "./Product-slider/Product-slider";
import ProductColor from "./Product-color/Product-color";
import ProductSize from "./Product-size/Product-size";
import ProductPrice from "./Product-price/Product-price";
import ProductInfo from "./Product-info/Product-info";
import PayWith from "./Pay-with/Pay-with";
import ProductDescription from "./Product-description/Product-description";
import AdditinalInfo from "./Additional-info/Additional-info";
import Reviews from "./Reviews/Reviews";
import RelatedProducts from "./Related-products/Related-products";
import "./Product-page.scss";

function ProductPage() {

    let {category}  = useParams(); 

    return (
        <div className = "page-product" data-test-id = {`product-page-${category}`}>
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