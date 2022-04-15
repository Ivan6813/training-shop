import React from "react";
import "./TextError.scss";

function TextError({children}) {

    return (
        <div className = "cart-text-error">
            {children}
        </div>
    )
}

export default TextError;