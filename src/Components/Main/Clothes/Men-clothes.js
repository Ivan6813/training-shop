import React from "react";
import ClothesHeader from "./Clothes-header";
import ClothesList from "./Clothes-list";
import ClothesBtn from "./Clothes-btn";
import men_clothes_1 from "../../../img/men_clothes_1.png";
import men_clothes_2 from "../../../img/men_clothes_2.png";
import men_clothes_3 from "../../../img/men_clothes_3.png";
import men_clothes_4 from "../../../img/men_clothes_4.png";
import men_clothes_5 from "../../../img/men_clothes_5.png";
import men_clothes_6 from "../../../img/men_clothes_6.png";
import men_clothes_7 from "../../../img/men_clothes_7.png";
import men_clothes_8 from "../../../img/men_clothes_8.png";
import "./index.scss";

function MenClothes() {

    const menClothes = [
        {id: 1, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_1},
        {id: 2, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_2},
        {id: 3, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_3},
        {id: 4, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_4},
        {id: 5, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_5},
        {id: 6, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_6},
        {id: 7, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_7},
        {id: 8, name: "Women's tracksuit Q109", price: "$ 30.00", img: men_clothes_8},
    ];

    return (
        <div className = "clothes">
            <ClothesHeader category={"Men`s"}/>
            <ClothesList clothes = {menClothes}/>
            <ClothesBtn/>
        </div>
    );
}

export default MenClothes;