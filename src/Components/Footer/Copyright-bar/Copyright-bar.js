import React from "react";
import image from "../../../img/copyright_bar_img_2x.png";
import "./Copyright-bar.scss";

function CopyrightBar() {

    return (
        <div className = "copyright-bar">
            <div className = "container">
                <div className = "wrapper-copyright-bar">
                    <div className = "copyright-bar-text">Copyright © 2032 all rights reserved</div>
                    <img className = "copyright-bar-img" src = {image} alt = "icon"/>
                    <a href = "/" className = "copyright-bar-link">Clevertec.ru/training</a>
                </div>
            </div>
        </div>
    );
}

export default CopyrightBar;