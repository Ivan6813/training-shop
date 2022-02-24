import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Controller } from "swiper";
import classNames from "classnames";
import { largeSlider } from "../../constants/constants";
import { smallSlider } from "../../constants/constants";
import "./Product-slider.scss";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

function ProductSlider() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [mainSlider, setMainSlider] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const length = smallSlider.length - 1;

    return (
        <div className = "product-slider-block">
            <div className = "product-sliders">
                <div className = "wrapper-product-slider-small">
                    <div className = "slider-small-btn">
                        <button onClick = {() => mainSlider.slidePrev()} 
                                className = {classNames("btn-prev", {disabled: activeSlide === 0})}
                        ></button>
                        <button onClick = {() => mainSlider.slideNext()} 
                                className = {classNames("btn-next", {disabled: activeSlide === length})}
                        ></button>
                    </div>
                    <Swiper
                        onSwiper = {setThumbsSwiper}
                        spaceBetween = {16}
                        slidesPerView = {4}
                        freeMode = {true}
                        watchSlidesProgress = {true}
                        modules = {[FreeMode, Navigation]}
                        direction = {"vertical"}
                        onSlideChange = {(swiper) => setActiveSlide(swiper.activeIndex)}
                        onClick = {(swiper, event) => {
                            if(event.target.className === "slider-small-img") {
                                setActiveSlide(swiper.clickedIndex);
                            }else {
                                return;
                            }
                        }}
                        breakpoints = {{
                            320: {
                                "direction" : "horizontal",
                                " spaceBetween" : "5",
                                "slidesPerView" : "3"
                            },
                            480: {
                                "direction" : "vertical",
                            },
                            996: {
                                "direction" : "vertical",
                            }
                        }}
                        className = "product-slider-small"
                        data-test-id = "product-slider"
                    >
                    {smallSlider.map((item, i) => {
                        return (
                            <SwiperSlide key = {item.id}>
                                <img className = {classNames("slider-small-img", {active: activeSlide !== i})} 
                                     src = {item.img} 
                                     alt = "img"
                                />
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
            <Swiper
                navigation = {true}
                thumbs = {{swiper: thumbsSwiper}}
                modules = {[Navigation, Thumbs, Controller]}
                controller = {{control: thumbsSwiper}}
                onSlideChange = {(swiper) => setActiveSlide(swiper.activeIndex)}
                onAfterInit = {(swiper) => setMainSlider(swiper)}
                className = "product-slider"
                data-test-id = "product-slider"
            >
            {largeSlider.map(item => {
                return (
                    <SwiperSlide key = {item.id}>
                        <img className = "product-slider-img" src = {item.img} alt = "img"/>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    );
}

export default ProductSlider;