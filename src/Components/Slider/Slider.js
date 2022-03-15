import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { mainSlider } from "../../constants/constants";
import { v4 as uuidv4 } from 'uuid';
import "swiper/scss/navigation";
import 'swiper/scss';
import "./Slider.scss";

function Slider() {

    return (
        <Swiper
            navigation = {true}
            modules = {[Navigation]} 
            className = "main-page-slider"
            data-test-id = "main-slider"
        >
            {mainSlider.map(item => {
                return (
                    <SwiperSlide key = {uuidv4()}>
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