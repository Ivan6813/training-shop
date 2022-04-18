import {v4 as uuidv4} from "uuid";
import {productInfo} from "../../../constants/constants";
import "./product-info.scss";

const ProductColor = () => (

    <div className = "product-info-block">
        <ul className = "product-info-list">
            {productInfo.map(({icon, text}) => ( 
                <li className = "product-info-item" key = {uuidv4()}>
                    <img 
                        className = "product-info-icon" 
                        src = {icon} 
                        alt = "icon"
                    />
                    <div className = "product-info-text">
                        {text}
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default ProductColor;