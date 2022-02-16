import React from "react";
import { Link } from "react-router-dom";
import burger_menu from "../../../../img/burger-menu.svg";
import { clothesNav } from "../../../constants/constants";
import "./Clothes-header.scss";

function ClothesHeader({category, path}) {

    return (
        <div className = "container">
            <div className = "header-clothes">
                <Link to = {path} className = "category-clothes">{category}</Link>
                <img className = "burger-menu-clothes" src = {burger_menu} alt = "burger-menu"/>
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
            </div>
        </div>
    );
}

export default ClothesHeader;