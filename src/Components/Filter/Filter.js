import React from "react";
import "./Filter.scss";

function Filter({clothes, category, selectColor,  setSelectColor, selectSize, setSelectSize, selectBrand, setSelectBrand, selectPrice, setSelectPrice}) {

    const allColors =  clothes.map(item => item.images.map(item => item.color));
    const allSizes = clothes.map(item => item.sizes.map(item => item));
    const allBrands =  clothes.map(item => item.brand);
    const uniqueColors = [...new Set(allColors.flat())];
    const uniqueSizes = [...new Set(allSizes.flat())];
    const uniqueBrands = [...new Set(allBrands)];
    const prices = ["500+", "200-500", "100-200", "50-100", "0-50"];

    const filterItems = [
        {id:1, title: "color", items: uniqueColors},
        {id:2, title: "size", items: uniqueSizes},
        {id:3, title: "brand", items: uniqueBrands},
        {id:4, title: "price", items: prices}
    ];

    function writeSelectedFilter(paragraph, event) {
        switch(paragraph) {
            case "color":
                if(event.target.checked) {
                    setSelectColor(selectColor.concat(event.target.value));
                }else {
                    setSelectColor(selectColor.filter(item => item !== event.target.value)); 
                }
            break;
            case "size":
                if(event.target.checked) {
                    setSelectSize(selectSize.concat(event.target.value));
                }else {
                    setSelectSize(selectSize.filter(item => item !== event.target.value)); 
                }
            break;
            case "brand":
                if(event.target.checked) {
                    setSelectBrand(selectBrand.concat(event.target.value));
                }else {
                    setSelectBrand(selectBrand.filter(item => item !== event.target.value));
                };
            break;
            case "price":
                if(event.target.checked) {
                    setSelectPrice(selectPrice.concat(event.target.value));
                }else {
                    setSelectPrice(selectPrice.filter(item => item !== event.target.value));
                };
            break;
            default:
              return;
          }
    }

    function saveChecked(paragraph, value) {
        if(paragraph === "color") return selectColor.includes(value);
        else if(paragraph === "size") return selectSize.includes(value);
        else if(paragraph === "brand") return selectBrand.includes(value);
        else if(paragraph === "price") return selectPrice.includes(value);
    }

    return (
        <div className = "filter" data-test-id = {`filters-${category}`}>
            {filterItems.map((item, index) => {
                return (
                <div className = "filter-category" key = {item.id}>
                    <div className = "filter-category-title">{item.title}</div>
                    <ul className = "filter-list" data-test-id = {`filters-${item.title}`}>
                    {item.items.map(value => {
                        return (
                        <li className = "filter-item" key = {value}>
                            <label htmlFor = {value} className = "filter-label">
                                <input  id = {value} 
                                        checked = {saveChecked(filterItems[index].title, value)}
                                        type = "checkbox"
                                        className = "filter-input"
                                        value = {value}
                                        onChange = {(event) => writeSelectedFilter(filterItems[index].title, event)}
                                        data-test-id = {`filter-${item.title}-${value}`}
                                />
                                {(filterItems[index].title === "price") ? `$${value}` : value}
                            </label>
                        </li>
                        )
                    })}
                    </ul>
                </div>
                )
            })}
         </div>
    );
}

export default Filter;