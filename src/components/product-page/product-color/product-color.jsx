import {useEffect} from "react";
import classNames from "classnames";
import "./product-color.scss";

const ProductColor = ({images, selectedColor, setSelectedColor, setSelectedItemImg}) => {

    const uniqueColors = [];
    images = images ?? [];

    const findUniqueImg = (item) => {
        if(uniqueColors.indexOf(item.color) === -1) {
            uniqueColors.push(item.color);
            return true;
        }
        return false;
    };
    
    const uniqueImages = images.filter(item => findUniqueImg(item));

    useEffect(() => {
        setSelectedItemImg(uniqueImages[selectedColor]);
    });

    return (
        <div className = "product-color-block">
            <div className = "product-color">
                Color: <span>{uniqueColors[selectedColor]}</span>
            </div>
            <div className = "product-select-color">
                {uniqueImages.map(({url, id}, i) => (
                    <img 
                        className = {
                            classNames("product-color-img", {
                                current_color: selectedColor === i
                            })
                        } 
                        src = {`https://training.cleverland.by/shop${url}`}
                        alt = "icon"
                        onClick = {() => setSelectedColor(i)}
                        key = {id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductColor;