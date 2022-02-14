import React from "react";
import burger_menu from "../../../img/burger-menu.svg";

function ClothesHeader({category}) {

    const clothesNav = ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"];

    return (
        <div className = "container">
            <div className = "header-clothes">
                <h2 className = "category-clothes">{category}</h2>
                <img className = "burger-menu-clothes" src = {burger_menu} alt = "burger-menu"/>
                <nav className = "clothes-nav">
                    <ul className = "clothes-nav-list">
                        {clothesNav.map((item, i) => {
                            return ( 
                            <li className = "clothes-nav-item" key = {i}>
                                <a className = "clothes-nav-link" href = "/">{item}</a>
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