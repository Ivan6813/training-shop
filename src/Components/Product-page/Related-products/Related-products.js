import React from "react";
import ClothesList from "../../Main/Clothes/Clothes-list/Clothes-list";
import { relatedProducts } from "../../constants/constants";
import "./Related-products.scss";

function RelatedProducts() {

    return (
       <div className = "container">
            <div className = "related-products-block">
                <div className = "related-products-header">
                    <div className = "related-products-title">RELATED PRODUCTS</div>
                    <div className = "related-products-slider">
                        <button className = "related-products-btn-prev"></button>
                        <button className = "related-products-btn-next"></button>
                    </div>
                </div>
                <ClothesList clothes = {relatedProducts}/>
            </div>
       </div>
    );
}

export default RelatedProducts;