import React, {useEffect} from "react";
import classNames from "classnames";
import "./Product-color.scss";

function ProductColor({images, selectedColor, setSelectedColor, setSelectedItemImg}) {

    const uniqueColors = [];
    images = images ?? [];
    const uniqueImages = images.filter(item => findUniqueImg(item));

    function findUniqueImg(item) {
        if(uniqueColors.indexOf(item.color) === -1) {
            uniqueColors.push(item.color);
            return true;
        }else {
            return false;
        }
    }

    useEffect(() => {
        setSelectedItemImg(uniqueImages[selectedColor]);
    });

    return (
        <div className = "product-color-block">
            <div className = "product-color">
                Color: <span>{uniqueColors[selectedColor]}</span>
            </div>
            <div className = "product-select-color">
                {uniqueImages.map((item, i) => {
                    return (
                        <img 
                            className = {
                                classNames("product-color-img", {
                                    current_color: selectedColor === i
                                })
                            } 
                            src = {`https://training.cleverland.by/shop${item.url}`}
                            alt = "icon"
                            onClick = {() => setSelectedColor(i)}
                            key = {item.id}
                        />
                    )
                })}
            </div>
            
        </div>
    );
}

export default ProductColor;