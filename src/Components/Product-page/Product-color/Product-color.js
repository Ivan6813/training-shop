import React, {useState} from "react";
import classNames from "classnames";
import "./Product-color.scss";

function ProductColor({images}) {

    const [currentColor, setCurrentColor] = useState(0);
    const uniqueColors = [];
    const uniqueImages = images.filter(item => findUniqueImg(item));

    function findUniqueImg(item) {
        if(uniqueColors.indexOf(item.color) === -1) {
            uniqueColors.push(item.color);
            return true;
        }else {
            return false;
        }
    }

    return (
        <div className = "product-color-block">
            <div className = "product-color">Color: <span>{uniqueColors[currentColor]}</span></div>
            <div className = "product-select-color">
                {uniqueImages.map((item, i) => {
                    return (
                        <img className = {classNames("product-color-img", {current_color: currentColor === i})} 
                             src = {`https://training.cleverland.by/shop${item.url}`}
                             alt = "icon"
                             onClick = {() => setCurrentColor(i)}
                             key = {item.id}
                        />
                    )
                })}
            </div>
            
        </div>
    );
}

export default ProductColor;