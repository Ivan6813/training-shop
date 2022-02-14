import React from "react";
import ClothesHeader from "./Clothes-header";
import ClothesList from "./Clothes-list";
import ClothesBtn from "./Clothes-btn";
import women_clothes_1 from "../../../img/women_clothes_1.png";
import women_clothes_2 from "../../../img/women_clothes_2.png";
import women_clothes_3 from "../../../img/women_clothes_3.png";
import women_clothes_4 from "../../../img/women_clothes_4.png";
import women_clothes_5 from "../../../img/women_clothes_5.png";
import women_clothes_6 from "../../../img/women_clothes_6.png";
import women_clothes_7 from "../../../img/women_clothes_7.png";
import women_clothes_8 from "../../../img/women_clothes_8.png";
import "./index.scss";

function WomenClothes() {

    const womenClothes = [
        {id: 1, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_1},
        {id: 2, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_2},
        {id: 3, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_3},
        {id: 4, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_4},
        {id: 5, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_5},
        {id: 6, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_6},
        {id: 7, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_7},
        {id: 8, name: "Women's tracksuit Q109", price: "$ 30.00", img: women_clothes_8},
    ];

    return (
        <div className = "clothes">
            <ClothesHeader  category = {"Women`s"}/>
            <ClothesList clothes = {womenClothes}/>
            <ClothesBtn/>
        </div>
    );
}

export default WomenClothes;