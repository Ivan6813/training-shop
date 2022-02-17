import React from "react";
import { productInfo } from "../../constants/constants";
import "./Product-info.scss";


function ProductColor() {

    return (
        <div className = "product-info-block">
            <ul className = "product-info-list">
                {productInfo.map(item => {
                    return ( 
                    <li className = "product-info-item" key = {item.id}>
                        <img className = "product-info-icon" src = {item.icon} alt = "icon"/>
                        <div className = "product-info-text">{item.text}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ProductColor;