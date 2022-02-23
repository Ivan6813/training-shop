import React,{useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import classNames from "classnames";
import { relatedProducts } from "../../constants/constants";
import "./Related-products.scss";
import "swiper/scss/navigation";
import 'swiper/scss';

function RelatedProducts({productType}) {

    const [activeSlide, setActiveSlide] = useState(0);
    const length = relatedProducts.length - 1;

    return (
       <div className = "container">
            <div className = "related-products-block">
                <div className = "related-products-header">
                    <div className = "related-products-title">RELATED PRODUCTS</div>
                    <div className = "related-products-slider">
                        <button className = {classNames("related-products-btn-prev", {disabled: activeSlide === 0})}></button>
                        <button className = {classNames("related-products-btn-next", {disabled: activeSlide === length})}></button>
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
                    onSlideChange = {(swiper) => setActiveSlide(swiper.activeIndex)}
                    breakpoints = {{
                        320: {
                            "slidesPerView" : 1
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
                >
                    {relatedProducts.map(item => {
                        return (
                            <SwiperSlide key = {item.id}>
                                <Link className = "clothes-card" to = {`/${productType}/${item.id}`}>
                                    <img className = "clothes-card-img" src= {item.img} alt = "clothes" />
                                    <div className = "clothes-card-name">{item.name}</div>
                                    <div className = "clothes-card-price-block">
                                        <div className = "clothes-card-price">{item.price}</div>
                                        <Rating/>
                                    </div>
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