import React, {useState} from "react";
import { Link } from "react-router-dom";
import { clothesNav } from "../../../constants/constants";
import classNames from "classnames";
import "./Clothes-header.scss";

function ClothesHeader({productType, setParticulars}) {

    const [activBtn, setActivBtn] = useState(0);

    function sortClothes(event, i) {
        setParticulars(event.target.value);
        setActivBtn(i);
    }

    return (
        <div className = "container">
            <div className = "header-clothes">
                <Link to = {`/${productType}`} className = "category-clothes">{`${productType}'s`}</Link>
                <nav className = "clothes-nav">
                    <ul className = "clothes-nav-list">
                        {clothesNav.map((item, i) => {
                            return ( 
                            <li className = "clothes-nav-item" key = {item.id}>
                                <button
                                    className = {classNames("clothes-sort-btn", {activ_btn: activBtn !== i})} 
                                    value = {item.value}
                                    onClick = {(event) => sortClothes(event, i)}
                                    data-test-id = {`clothes-${productType}-${item.value}`}
                                >{item.name}</button>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                <select className = "header-clothes-sort" 
                        onChange = {(event) => sortClothes(event)}
                >
                    <option value = "isNewArrivals">NEW ARRIVALS</option>
                    <option value = "isSpecial">SPECIALS</option>
                    <option value = "isBestseller">BESTSELLERS</option>
                    <option value = "isMostViewed">MOST VIEWED</option>
                    <option value = "isFeatured">FEATURED PRODUCTS</option>
                </select>
            </div>
        </div>
    );
}

export default ClothesHeader;