import React from "react";
import Rating from "../../../Rating/Rating";
import { Link } from "react-router-dom";
import "./Clothes-list.scss";

function ClothesList({clothes, productType}) {

    function discountCalc(price, discount) {
        let percent = 100 + parseInt(discount);
        return ((price / percent) *100).toFixed(1);
    }

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
                            <div className = "clothes-card-info">
                                {(item.discount) ? (
                                    <div className = "clothes-card-prices-block">
                                        <div className = "clothes-price">{`$ ${item.price}`}</div>
                                        <div className = "clothes-old-price">
                                            {`$ ${discountCalc(item.price, item.discount)}`}</div>
                                        </div>
                                ):(
                                    <div className = "clothes-price">{`$ ${item.price}`}</div>
                                )}
                                <Rating rating = {item.rating}/>
                            </div>
                            {(item.discount) ? (
                                <div className = "discount">{item.discount}</div>
                            ):(
                                <div></div>
                            )}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ClothesList;