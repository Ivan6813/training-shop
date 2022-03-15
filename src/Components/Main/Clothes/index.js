import React,{useState} from "react";
import ClothesHeader from "./Clothes-header/Clothes-header";
import ClothesList from "./Clothes-list/Clothes-list";
import ClothesBtn from "./Clothes-btn/Clothes-btn";
import { PRODUCTS } from "../../../data/data";
import "./Clothes.scss";

function Clothes({productType}) {

    const [particulars, setParticulars] = useState("isNewArrivals");
    const clothes = (productType === "women") ? PRODUCTS.women : PRODUCTS.men;
    const sortClothes = clothes.filter(item => item.particulars[particulars]);

    return (
        <div className = "clothes" data-test-id = {`clothes-${productType}`}>
            <ClothesHeader productType = {productType} setParticulars = {setParticulars}/>
            <ClothesList clothes = {sortClothes} productType = {productType}/>
            <ClothesBtn productType = {productType}/>
        </div>
    );
}

export default Clothes;