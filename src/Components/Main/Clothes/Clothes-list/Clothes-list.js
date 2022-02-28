import React from "react";
import Rating from "../../../Rating/Rating";
import { Link } from "react-router-dom";
import "./Clothes-list.scss";

function ClothesList({clothes, productType}) {

    return (
        <div className = "container">
            <ul className = "clothes-cards-list">
                {clothes.map(item => {
                    return ( 
                    <li className = "clothes-cards-item" key = {item.id}>
                        <Link className = "clothes-card" 
                              to = {`/${productType}/${item.id}`}
                              data-test-id = {`clothes-card-${productType}`}
                              >
                            <img className = "clothes-card-img" 
                                 src= {`https://training.cleverland.by/shop${item.images[0].url}`} 
                                 alt = "clothes"
                            />
                            <div className = "clothes-card-name">{item.name}</div>
                            <div className = "clothes-card-price-block">
                                <div className = "clothes-card-price">{item.price}</div>
                                <Rating rating = {item.rating}/>
                            </div>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ClothesList;