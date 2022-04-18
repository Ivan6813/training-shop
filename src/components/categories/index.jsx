import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ProductsHeader from "./products-header/products-header";
import ProductsSettings from "./products-settings/products-settings";
import ClothesList from "../main/clothes/clothes-list/clothes-list";
import ErrorPage from "../error-page/error-page";
import "./categories.scss";

const Categories = () => {

    const [filteredClothes, setFilteredClothes] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const {category}  = useParams();
    const clothes = useSelector(state => state.products?.products[category]);
    const clothesList = clothes ?? [];

    useEffect(() => {
        if(clothesList.length) {
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
};

export default Categories;