import React, {useState} from "react";
import classNames from "classnames";
import "./CVV-btn.scss";

function CvvBtn({inputCVV}) {

    const [showCVV, setShowCVV] = useState(false);

    return (
         <button 
            className = {classNames("cvvBtn", {show_CVV : showCVV})}
            type = "button"
            onClick = {() => {
                setShowCVV(!showCVV);
                const input = inputCVV?.current;
                if(input.type === "password") {
                    input.type = "text";
                    // input.style.fontFamily = "Spartan";
                    // input.style.fontSize = "14px";
                }else {
                    input.type = "password";
                    // input.style.fontFamily = "fontello";
                    // input.style.fontSize = "10px";
                }
            }}
        ></button>
    )
}

export default CvvBtn;