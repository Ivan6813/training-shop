import React from "react";
import ClothesHeader from "./Clothes-header/Clothes-header";
import ClothesList from "./Clothes-list/Clothes-list";
import ClothesBtn from "./Clothes-btn/Clothes-btn";
import { womenClothes } from "../../constants/constants";
import "./Clothes.scss";

function WomenClothes() {

    return (
        <div className = "clothes">
            <ClothesHeader  category = {"Women`s"}/>
            <ClothesList clothes = {womenClothes}/>
            <ClothesBtn/>
        </div>
    );
}

export default WomenClothes;