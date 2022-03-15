import React,{useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import classNames from "classnames";
import { PRODUCTS } from "../../../data/data";
import "./Related-products.scss";
import "swiper/scss/navigation";
import 'swiper/scss';

function RelatedProducts({productType}) {

    const [progressSlide, setProgressSlide] = useState(0);
    const relatedProducts = (productType === "women") ? PRODUCTS.women : PRODUCTS.men;

    function discountCalc(price, discount) {
        let percent = 100 + parseInt(discount);
        return ((price / percent) *100).toFixed(1);
    }

    return (
       <div className = "container">
            <div className = "related-products-block">
                <div className = "related-products-header">
                    <div className = "related-products-title">RELATED PRODUCTS</div>
                    <div className = "related-products-slider">
                        <button className = {classNames("related-products-btn-prev", {disabled: progressSlide === 0})}></button>
                        <button className = {classNames("related-products-btn-next", {disabled: progressSlide === 1})}></button>
                    </div>
                </div>
                <Swiper
                    navigation = {{
                        nextEl: ".related-products-btn-next",
                        prevEl: ".related-products-btn-prev"
                    }}
                    modules = {[Navigation]} 
                    spaceBetween = {30}
                    slidesPerView = {4}
                    slidesPerGroup = {1}
                    onSlideChange = {(swiper) => setProgressSlide(swiper.progress)}
                    breakpoints = {{
                        320: {
                            "slidesPerView" : 2,
                            "spaceBetween" : 10
                        },
                        480: {
                            "slidesPerView" : 3,
                            "spaceBetween" : 15
                        },
                        996: {
                            "slidesPerView ": 4
                        }
                    }}
                    className = "related-products-slider"
                    data-test-id = "related-slider"
                >
                    {relatedProducts.map(item => {
                        return (
                            <SwiperSlide key = {item.id}>
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
                                                    {`$ ${discountCalc(item.price, item.discount)}`}
                                                </div>
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
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
       </div>
    );
}

export default RelatedProducts;