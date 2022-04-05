import React, {useState, useEffect} from "react";
import ProductsHeader from "./Products-header/Products-header";
import ProductsSettings from "./Products-settings/Products-settings";
import ClothesList from "../Main/Clothes/Clothes-list/Clothes-list";
import ErrorPage from "../Error-page/Error-page";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import "./categories.scss";

function Categories() {

    const [filteredClothes, setFilteredClothes] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const {category}  = useParams();
    const clothes = useSelector(state => state.products?.products[category]);
    const clothesList = clothes ?? [];

    useEffect(() => {
        if(clothesList.length !== 0) {
            setFilteredClothes(clothes);
            setNotFound(false);
        }else if(!clothes) {
            return setNotFound(true);
        }
    },[clothes]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {notFound ? (
            <ErrorPage/>
            ) : (
            <div className = "categories" data-test-id = {`products-page-${category}`}>
                <ProductsHeader/>
                <ProductsSettings 
                    clothes = {clothesList}
                    filteredClothes = {filteredClothes}
                    setFilteredClothes = {setFilteredClothes}
                    category = {category}
                />
                <ClothesList 
                    clothes = {filteredClothes}
                    productType = {category}
                />
            </div>
            )}
        </>
    );
}

export default Categories;