import React from "react";
import { Link } from "react-router-dom";
import "./Clothes-btn.scss";

function BtnBlock({productType}) {

    return (
        <div className = "container">
            <Link to = {`/${productType}`} className = "clothes-btn">See all</Link>
        </div>
    );
}

export default BtnBlock;