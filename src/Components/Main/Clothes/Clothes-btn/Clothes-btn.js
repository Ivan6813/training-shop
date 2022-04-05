import React from "react";
import { Link } from "react-router-dom";
import "./Clothes-btn.scss";

function BtnBlock({category}) {

    return (
        <div className = "container">
            <Link to = {`/${category}`} className = "clothes-btn">
                See all
            </Link>
        </div>
    );
}

export default BtnBlock;