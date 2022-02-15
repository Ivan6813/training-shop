import React from "react";
import "./Products-header.scss";

function ProductsHeader({category}) {

    return (
        <div className = "products-header">
            <div className = "container">
                <div className = "wrapper-products-header">
                    <div className = "products-header-nav">
                        <a className = "home-link" href = "/">Home</a>
                        <a className = "current-categories-link" href = "/">{category}</a>
                    </div>
                    <a className = "share-link" href = "/">Share</a>
                </div>
                <div className = "category-name">{category}</div>
            </div>
        </div>
    );
}

export default ProductsHeader;