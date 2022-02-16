import React from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import { menClothes, womenClothes } from "../constants/constants";
import { useParams } from "react-router-dom";
import "./categories.scss";

function Categories() {

    let {category}  = useParams(); 
    let clothes;

    (category === "women") ? clothes = womenClothes : clothes = menClothes;

    return (
        <div className = "categories">
            <ProductsHeader/>
            <ProductsSettings/>
            <ClothesList clothes = {clothes} category = {category}/>
        </div>
    );
}

export default Categories;