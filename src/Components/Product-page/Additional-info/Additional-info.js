import React from "react";
import "./Additional-info.scss";

function AdditinalInfo({material, colors, sizes}) {

    const allColors = colors.map(item => item.color);
    const uniqueColors = [...new Set(allColors)];
 
    return (
        <div className = "additinal-info-block">
            <div className = "additinal-info-title">ADDITIONAL INFORMATION</div>
            <div className = "additinal-info-color">Color: <span>{uniqueColors.join(", ")}</span></div>
            <div className = "additinal-info-size">Size: <span>{sizes.join(", ")}</span></div>
            <div className = "additinal-info-material">Material: <span>{material}</span></div>
        </div>
    );
}

export default AdditinalInfo;