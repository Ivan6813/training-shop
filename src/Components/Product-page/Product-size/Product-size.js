import React from "react";
import size_guide from "../../../img/size-guide.svg";
import "./Product-size.scss";

function ProductSize() {

    return (
        <div className = "product-size-block">
            <div className = "product-size">Size: <span>XS</span></div>
            <div className = "product-select-size">
                <button className = "product-change-size">xs</button>
                <button className = "product-change-size">s</button>
                <button className = "product-change-size">m</button>
                <button className = "product-change-size">l</button>
            </div>
            <div className = "size-guide-block">
                <img className = "size-guide-img" src = {size_guide} alt = "icon"/>
                <div className = "size-guide">Size guide</div>
            </div>
            
        </div>
    );
}

export default ProductSize;