import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {v4 as uuidv4} from "uuid";
import {mainSlider} from "../../constants/constants";
import "../../../node_modules/swiper/modules/navigation/navigation.scss";
import "../../../node_modules/swiper/swiper.scss";
import "./slider.scss";

const Slider = () => (

    <Swiper
        navigation = {true}
        modules = {[Navigation]} 
        className = "main-page-slider"
        data-test-id = "main-slider"
    >
        {mainSlider.map(({img, text, title}) => (
            <SwiperSlide key = {uuidv4()}>
                <img 
                    src = {img} 
                    className = "main-page-slider-img" 
                    alt = "img" 
                />
                <div className = "main-page-slider-text-block">
                    <div className = "main-page-slider-text">
                        {text}
                    </div>
                    <div className = "main-page-slider-title">
                        {title}
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default Slider;