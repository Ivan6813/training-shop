import React from "react";
import ClothesHeader from "./Clothes-header/Clothes-header";
import ClothesList from "./Clothes-list/Clothes-list";
import ClothesBtn from "./Clothes-btn/Clothes-btn";
import { menClothes, womenClothes } from "../../constants/constants";
import "./Clothes.scss";

function Clothes({productType}) {

    let clothes = (productType === "women") ? womenClothes : menClothes;

    return (
        <div className = "clothes" data-test-id = {`clothes-${productType}`}>
            <ClothesHeader productType = {productType}/>
            <ClothesList clothes = {clothes}/>
            <ClothesBtn/>
        </div>
    );
}

export default Clothes;