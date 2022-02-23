import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { mainSlider } from "../constants/constants";
import "swiper/scss/navigation";
import 'swiper/scss';
import "./Slider.scss";

function Slider() {

    return (
        <Swiper
            navigation = {true}
            modules = {[Navigation]} 
            className = "main-page-slider"
        >
            {mainSlider.map(item => {
                return (
                    <SwiperSlide key = {item.id}>
                        <img src = {item.img} className = "main-page-slider-img" alt = "img" />
                        <div className = "main-page-slider-text-block">
                            <div className = "main-page-slider-text">{item.text}</div>
                            <div className = "main-page-slider-title">{item.title}</div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default Slider;