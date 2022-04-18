import {useState} from "react";
import {useSelector} from "react-redux";
import ClothesHeader from "./clothes-header/clothes-header";
import ClothesList from "./clothes-list/clothes-list";
import ClothesBtn from "./clothes-btn/clothes-btn";
import "./clothes.scss";

const Clothes = ({category}) => {

    const [particulars, setParticulars] = useState("isNewArrivals");
    const products = useSelector(state => state.products.products[category]);
    const sortClothes = products.filter(item => item.particulars[particulars]);

    return (
        <div className = "clothes" data-test-id = {`clothes-${category}`}>
            <ClothesHeader
                category = {category} 
                setParticulars = {setParticulars}
            />
            <ClothesList clothes = {sortClothes}/>
            <ClothesBtn category = {category}/>
        </div>
    );
};

export default Clothes;