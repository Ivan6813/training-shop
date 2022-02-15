import React from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import "./categories.scss";

function Categories({category, clothes}) {

    return (
        <div className = "categories">
            <ProductsHeader category = {category}/>
            <ProductsSettings/>
            <ClothesList clothes = {clothes}/>
        </div>
    );
}

export default Categories;