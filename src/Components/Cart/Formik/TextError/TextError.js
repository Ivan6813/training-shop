import React from "react";
import "./TextError.scss";

function TextError(props) {
    return (
        <div className = "cart-text-error">
            {props.children}
        </div>
    )
}

export default TextError;