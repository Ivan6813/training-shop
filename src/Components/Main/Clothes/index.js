import React,{useState} from "react";
import { useSelector } from "react-redux";
import ClothesHeader from "./Clothes-header/Clothes-header";
import ClothesList from "./Clothes-list/Clothes-list";
import ClothesBtn from "./Clothes-btn/Clothes-btn";
import "./Clothes.scss";

function Clothes({category}) {

    const [particulars, setParticulars] = useState("isNewArrivals");
    const products = useSelector(state => state.products.products[category]);
    const sortClothes = products.filter(item => item.particulars[particulars]);

    return (
        <div className = "clothes" data-test-id = {`clothes-${category}`}>
            <ClothesHeader category = {category} setParticulars = {setParticulars}/>
            <ClothesList clothes = {sortClothes}/>
            <ClothesBtn category = {category}/>
        </div>
    );
}

export default Clothes;