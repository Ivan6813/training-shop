import React from "react";
import Rating from "../../Rating/Rating";
import { Link } from "react-router-dom";
import "./Product-header.scss";

function ProductHeader({category, name, reviews, rating}) {

    return (
        <div className = "product-header">
            <div className = "container">
                <div className = "wrapper-product-header">
                    <div className = "product-header-nav">
                        <Link className = "home-link" to = "/">Home</Link>
                        <Link className = "products-page-link" to = {`/${category}`}>{category}</Link>
                        <Link className = "current-product-link" to = {`/${category}/1`}>{name}</Link>
                    </div>
                    <Link className = "share-link" to = "/">Share</Link>
                </div>
                <div className = "product-name">{name}</div>
                <div className = "product-info">
                    <div className = "rating-info">
                        <Rating rating = {rating}/>
                        <div className = "number-reviews">{reviews} Reviews</div>
                    </div>
                    <div className = "availability-info">
                        <div className = "sku">SKU: <b>777</b></div>
                        <div className = "availability">Availability: <b>In Stock</b></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;