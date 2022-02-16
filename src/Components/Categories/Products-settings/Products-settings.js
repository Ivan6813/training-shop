import React from "react";
import "./Products-settings.scss";

function ProductsSettings() {

    return (
        <div className = "container">
            <div className = "products-settings">
                <div className = "filter-block">
                    <button className = "filter-btn"></button>
                    <div className = "filter-text">Filter</div>
                </div>
                <div className = "change-layout-block">
                    <button className = "display-list-btn"></button>
                    <button className = "display-tile-btn"></button>
                </div>
                <select className = "products-settings-sort">
                    <option value = "">BESTSELLERS</option>
                    <option value = "">NEW ARRIVALS</option>
                    <option value = "">SPECIALS</option>
                    <option value = "">MOST VIEWED</option>
                </select>
            </div>
        </div>
    );
}

export default ProductsSettings;