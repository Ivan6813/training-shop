import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs, Controller} from "swiper";
import classNames from "classnames";
import "../../../../node_modules/swiper/swiper.scss";
import "../../../../node_modules/swiper/modules/free-mode/free-mode.scss";
import "../../../../node_modules/swiper/modules/navigation/navigation.scss";
import "../../../../node_modules/swiper/modules/thumbs/thumbs.scss";
import "./product-slider.scss";

const ProductSlider = ({images}) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [mainSlider, setMainSlider] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const length = images ? images.length - 1 : 0;

    const selectSlide = (swiper, event) => {
        if(event.target.className === "slider-small-img") {
            setActiveSlide(swiper.clickedIndex);
        }else {
            return;
        }
    };

    return (
        <div className = "product-slider-block" data-test-id = "product-slider">
            <div className = "product-sliders">
                <div className = "wrapper-product-slider-small">
                    <div className = "slider-small-btn">
                        <button 
                            onClick = {() => mainSlider.slidePrev()} 
                            className = {
                                classNames("btn-prev", {
                                    disabled: activeSlide === 0
                                })
                            }
                        ></button>
                        <button 
                            onClick = {() => mainSlider.slideNext()} 
                            className = {
                                classNames("btn-next", {
                                    disabled: activeSlide === length
                                })
                            }
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
                        onClick = {(swiper, event) => {selectSlide(swiper, event)}}
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
                    >
                        {images && images.map(({id, url}, i) => (
                            <SwiperSlide key = {id}>
                                <img 
                                    className = {
                                        classNames("slider-small-img", {
                                            active: activeSlide !== i
                                        })
                                    } 
                                    src = {`https://training.cleverland.by/shop${url}`}
                                    alt = "img"
                                />
                            </SwiperSlide>
                        ))}
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
            >
                {images && images.map(({id, url}) => (
                    <SwiperSlide key = {id}>
                        <img 
                            className = "product-slider-img" 
                            src = {`https://training.cleverland.by/shop${url}`} 
                            alt = "img"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;