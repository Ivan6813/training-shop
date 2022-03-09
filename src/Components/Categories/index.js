import React, {useState} from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import { PRODUCTS } from "../../data/data";
import { useParams } from "react-router-dom";
import "./categories.scss";

function Categories() {

    const {category}  = useParams(); 
    const clothes = (category === "women") ? PRODUCTS.women : PRODUCTS.men;
    const [filteredClothes, setFilteredClothes] = useState(clothes);

    return (
        <div className = "categories" data-test-id = {`products-page-${category}`}>
            <ProductsHeader/>
            <ProductsSettings clothes = {clothes}
                              filteredClothes = {filteredClothes}
                              setFilteredClothes = {setFilteredClothes}
                              category = {category}/>
            <ClothesList clothes = {filteredClothes} productType = {category}/>
        </div>
    );
}

export default Categories;