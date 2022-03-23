import React, {useState, useEffect} from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import "./categories.scss";

function Categories() {

    const [filteredClothes, setFilteredClothes] = useState([]);
    const {category}  = useParams();
    const clothes = useSelector(state => state.products.products[category]);
    
    useEffect(() => {
        if(clothes.length !== 0) {
            setFilteredClothes(clothes);
        }
    },[clothes]);

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