import React from "react";
import "./Additional-info.scss";

function AdditinalInfo() {

    return (
        <div className = "additinal-info-block">
            <div className = "additinal-info-title">ADDITIONAL INFORMATION</div>
            <div className = "additinal-info-color">Color: <span>Blue, White, Black, Grey</span></div>
            <div className = "additinal-info-size">Size: <span>XS, S, M, L</span></div>
            <div className = "additinal-info-material">Material: <span>100% Polyester</span></div>
        </div>
    );
}

export default AdditinalInfo;