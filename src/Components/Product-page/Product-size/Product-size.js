import React from "react";
import classNames from "classnames";
import size_guide from "../../../img/size-guide.svg";
import { v4 as uuidv4 } from 'uuid';
import "./Product-size.scss";

function ProductSize({sizes, selectedSize, setSelectedSize}) {

    return (
        <div className = "product-size-block">
            <div className = "product-size">Size: <span>{sizes && sizes[selectedSize]}</span></div>
            <div className = "product-select-size">
                {sizes && sizes.map((item, i) => {
                    return (
                        <button onClick = {() => setSelectedSize(i)} 
                            className = {classNames("product-change-size", {current_size: selectedSize === i})}
                            key = {uuidv4()}
                        >{item}</button>
                    )
                })}
            </div>
            <div className = "size-guide-block">
                <img className = "size-guide-img" src = {size_guide} alt = "icon"/>
                <div className = "size-guide">Size guide</div>
            </div>
            
        </div>
    );
}

export default ProductSize;