import React from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import { PRODUCTS } from "../../data/data";
import { useParams } from "react-router-dom";
import "./categories.scss";

function Categories() {

    let {category}  = useParams(); 
    let clothes = (category === "women") ? PRODUCTS.women : PRODUCTS.men;

    return (
        <div className = "categories" data-test-id = {`products-page-${category}`}>
            <ProductsHeader/>
            <ProductsSettings/>
            <ClothesList clothes = {clothes} productType = {category}/>
        </div>
    );
}

export default Categories;