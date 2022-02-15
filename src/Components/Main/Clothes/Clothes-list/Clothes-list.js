import React from "react";
import Rating from "../../../Rating/Rating";
import "./Clothes-list.scss";

function ClothesList({clothes}) {

    return (
        <div className = "container">
            <ul className = "clothes-cards-list">
                {clothes.map(item => {
                    return ( 
                    <li className = "clothes-cards-item" key = {item.id}>
                        <a className = "clothes-card" href = "/">
                            <img className = "clothes-card-img" src= {item.img} alt = "clothes" />
                            <div className = "clothes-card-name">{item.name}</div>
                            <div className = "clothes-card-price-block">
                                <div className = "clothes-card-price">{item.price}</div>
                                <Rating/>
                            </div>
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ClothesList;