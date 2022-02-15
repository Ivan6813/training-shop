import React from "react";
import ClothesHeader from "./Clothes-header/Clothes-header";
import ClothesList from "./Clothes-list/Clothes-list";
import ClothesBtn from "./Clothes-btn/Clothes-btn";
import { menClothes } from "../../constants/constants";
import "./Clothes.scss";

function MenClothes() {

    return (
        <div className = "clothes">
            <ClothesHeader category={"Men`s"}/>
            <ClothesList clothes = {menClothes}/>
            <ClothesBtn/>
        </div>
    );
}

export default MenClothes;