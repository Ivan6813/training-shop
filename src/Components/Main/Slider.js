import React from "react";
import mainImg from "../../img/slider-main-img.png";
import womenImg from "../../img/slider-women-img.png";
import menImg from "../../img/slider-men-img.png";
import accessoriesImg from "../../img/slider-accessories-img.png";

function Slider() {

    return (
        <div className = "container">
            <div className = "slider-block">
               <div className = "slider-select-item">
                   <img src = {mainImg} className = "select-img" alt = "img" />
                   <div className = "slider-button-block">
                       <button className = "slider-btn-left"></button>
                       <div className = "select-item-text-block">
                           <div className = "select-item-text">Banner</div>
                           <div className = "select-item-title">Your title text</div>
                       </div>
                       <button className = "slider-btn-right"></button>
                   </div>
               </div>
               <div className = "slider-items">
                   <div className = "wrapper-slider-items">
                       <div className = "slider-item-women">
                            <img className = "women-img" src = {womenImg} alt = "women"/>
                            <div className = "slider-items-text">Women</div>
                       </div>
                       <div className = "slider-item-men">
                            <img className = "men-img" src = {menImg} alt = "men"/>
                            <div className = "slider-items-text">men</div>
                       </div>
                   </div>
                   <div className = "slider-item-accessories">
                       <img className = "accessories-img" src = {accessoriesImg} alt = "accessories"/>
                       <div className = "slider-items-text">Accessories</div>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default Slider;