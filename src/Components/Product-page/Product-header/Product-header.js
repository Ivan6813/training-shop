import React from "react";
import Rating from "../../Rating/Rating";
import { Link } from "react-router-dom";
import "./Product-header.scss";

function ProductHeader({product}) {

    return (
        <div className = "product-header">
            <div className = "container">
                <div className = "wrapper-product-header">
                    <div className = "product-header-nav">
                        <Link className = "home-link" to = "/">Home</Link>
                        <Link className = "products-page-link" 
                              to = {`/${product.category}`}
                        >
                            {product.category}
                        </Link>
                        <Link className = "current-product-link"
                              to = {`/${product.category}/${product.id}`}
                        >
                            {product.name}
                        </Link>
                    </div>
                    <Link className = "share-link" to = "/">Share</Link>
                </div>
                <div className = "product-name">{product.name}</div>
                <div className = "product-info">
                    <div className = "rating-info">
                        <Rating rating = {product.rating}/>
                        <div className = "number-reviews">{product.reviews?.length} Reviews</div>
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