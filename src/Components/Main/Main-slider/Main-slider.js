import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Slider/Slider";
import womenImg from "../../../img/slider-women-img.png";
import menImg from "../../../img/slider-men-img.png";
import accessoriesImg from "../../../img/slider-accessories-img.png";
import "./Main-slider.scss";

function MainSlider() {

    return (
        <div className = "container">
            <div className = "slider-block">
               <Slider/>
               <div className = "main-cards">
                   <div className = "wrapper-main-cards">
                       <Link to = "/women" className = "main-card">
                            <img className = "main-card-img" src = {womenImg} alt = "women"/>
                            <div className = "main-card-text">women</div>
                       </Link>
                       <Link to = "/men" className = "main-card">
                            <img className = "main-card-img" src = {menImg} alt = "men"/>
                            <div className = "main-card-text">men</div>
                       </Link>
                   </div>
                   <Link to = "/" className = "main-card">
                       <img className = "main-card-img" src = {accessoriesImg} alt = "accessories"/>
                       <div className = "main-card-text">Accessories</div>
                   </Link>
               </div>
            </div>
        </div>
    );
}

export default MainSlider;