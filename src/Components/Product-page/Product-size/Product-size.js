import React, {useState} from "react";
import classNames from "classnames";
import size_guide from "../../../img/size-guide.svg";
import "./Product-size.scss";

function ProductSize({sizes}) {

    const [currentSize, setcurrentSize] = useState(0);

    function selectSize(index) {
        setcurrentSize(index);
    }

    return (
        <div className = "product-size-block">
            <div className = "product-size">Size: <span>{sizes[currentSize]}</span></div>
            <div className = "product-select-size">
                {sizes.map((item, i) => {
                    return (
                        <button onClick = {() => selectSize(i)} 
                            className = {classNames("product-change-size", {current_size: currentSize === i})}
                            key = {i}
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