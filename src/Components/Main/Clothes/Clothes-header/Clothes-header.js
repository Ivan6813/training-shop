import React from "react";
import { Link } from "react-router-dom";
import { clothesNav } from "../../../constants/constants";
import "./Clothes-header.scss";

function ClothesHeader({productType, path}) {

    return (
        <div className = "container">
            <div className = "header-clothes">
                <Link to = {`/${productType}`} className = "category-clothes">{`${productType}'s`}</Link>
                <nav className = "clothes-nav">
                    <ul className = "clothes-nav-list">
                        {clothesNav.map(item => {
                            return ( 
                            <li className = "clothes-nav-item" key = {item.id}>
                                <Link className = "clothes-nav-link" to = {item.path}>{item.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                <select className = "header-clothes-sort">
                    <option value = "">NEW ARRIVALS</option>
                    <option value = "">SPECIALS</option>
                    <option value = "">BESTSELLERS</option>
                    <option value = "">MOST VIEWED</option>
                </select>
            </div>
        </div>
    );
}

export default ClothesHeader;