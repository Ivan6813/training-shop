import React, {useState, useEffect} from "react";
import Filter from "../../Filter/Filter";
import classNames from "classnames";
import "./Products-settings.scss";

function ProductsSettings({clothes, filteredClothes, setFilteredClothes, category}) {

    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [selectColor, setSelectColor] = useState([]);
    const [selectSize, setSelectSize] = useState([]);
    const [selectBrand, setSelectBrand] = useState([]);
    const [selectPrice, setSelectPrice] = useState([]);

    function sortByPrice(value, price) {
        const priceRange = value.split("-");
        if(priceRange.length === 1) {
            return (price >= priceRange[0]) ? true : false;
        }else {
            return (price >= priceRange[0] && price <= priceRange[1]) ? true : false;
        }
    }

    useEffect(() => {
        setFilterIsOpen(false);
        setSelectColor([]);
        setSelectSize([]);
        setSelectBrand([]);
        setSelectPrice([]);
    },[category]);

    useEffect(() => {
        const newFilteredClothes = clothes.filter(item => {
            return (
                item.images.some(image => selectColor.length === 0 || selectColor.includes(image.color))
                &&
                item.sizes.some(size => selectSize.length === 0 || selectSize.includes(size))
                &&
                (selectBrand.length === 0 || selectBrand.includes(item.brand))
                &&
                (selectPrice.length === 0 || selectPrice.some(value => sortByPrice(value, item.price)))
            );
        })
        setFilteredClothes(newFilteredClothes);
    },[selectColor, selectSize, selectBrand, selectPrice]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className = "container">
            <div className = "products-settings">
                <button className = {classNames("filter-btn", {filter_open: filterIsOpen})}
                        onClick = {() => setFilterIsOpen(!filterIsOpen)}
                        data-test-id = "filter-button"
                >
                    Filter
                </button>
                <div className = "page-view-block">
                    <button className = "page-view-list-btn"></button>
                    <button className = "page-view-squares-btn"></button>
                </div>
            </div>
            <div className = {classNames("hidden", {show_filter: filterIsOpen})}>
                <Filter clothes = {clothes}
                        category = {category}
                        selectColor = {selectColor}
                        setSelectColor = {setSelectColor}
                        selectSize = {selectSize}
                        setSelectSize = {setSelectSize}
                        selectBrand = {selectBrand}
                        setSelectBrand = {setSelectBrand}
                        selectPrice = {selectPrice}
                        setSelectPrice = {setSelectPrice}
                                      
                />
            </div>
            {(selectColor.length === 0 && selectSize.length === 0 && selectBrand.length === 0 && selectPrice.length === 0)
            ||
            <ul className = "activ-filters-bar">
                <li className = "items-found">{filteredClothes.length} items Found</li>
                {!!selectColor.length && <li className = "activ_filter">Color: {selectColor.join(", ")}</li>}
                {!!selectSize.length && <li className = "activ_filter">Size: {selectSize.join(", ")}</li>}
                {!!selectBrand.length && <li className = "activ_filter">Brand: {selectBrand.join(", ")}</li>}
                {!!selectPrice.length && <li className = "activ_filter">Price: {selectPrice.join(", ")}</li>}
            </ul>
            }
        </div>
    );
}

export default ProductsSettings;