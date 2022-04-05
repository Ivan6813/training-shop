import React from "react";
import { productInfo } from "../../../constants/constants";
import { v4 as uuidv4 } from 'uuid';
import "./Product-info.scss";


function ProductColor() {

    return (
        <div className = "product-info-block">
            <ul className = "product-info-list">
                {productInfo.map(item => {
                    return ( 
                    <li className = "product-info-item" key = {uuidv4()}>
                        <img 
                            className = "product-info-icon" 
                            src = {item.icon} 
                            alt = "icon"
                        />
                        <div className = "product-info-text">
                            {item.text}
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ProductColor;