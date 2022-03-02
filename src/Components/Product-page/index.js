import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/data";
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

    const {category, id}  = useParams(); 
    const [product] = PRODUCTS[category].filter(item => item.id === id);

    return (
        <div className = "page-product" data-test-id = {`product-page-${category}`}>
            <ProductHeader category = {product.category} 
                           name = {product.name}
                           reviews = {product.reviews.length}
                           rating = {product.rating}
            />
            <div className = "container">
                <div className = "product-page">
                    <ProductSlider images = {product.images}/>
                    <div className = "product-page-info">
                        <ProductColor images = {product.images}/>
                        <ProductSize sizes = {product.sizes}/>
                        <ProductPrice price = {product.price}/>
                        <ProductInfo/>
                        <PayWith/>
                        <ProductDescription/>
                        <AdditinalInfo material = {product.material} 
                                       colors = {product.images}
                                       sizes = {product.sizes}
                        />
                        <Reviews reviews = {product.reviews}
                                 rating = {product.rating}
                        />
                    </div>
                </div>
            </div>
            <RelatedProducts productType = {category}/>
        </div>
    );
}

export default ProductPage;