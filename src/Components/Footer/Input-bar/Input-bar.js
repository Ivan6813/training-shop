import React from "react";
import Socials from "../../Socials/Socials";
import "./Input-bar.scss";
import SubscribeForm from "../../Subscribe-form/Subscribe-form";

function InputBar() {

    return (
        <div className = "input-bar">
            <div className = "container">
                <div className = "wrapper-input-bar">
                    <div className = "input-bar-text">Be in touch with us:</div>
                    <SubscribeForm prefix = "footer"
                                   btnText = "join us"
                                   loaderSize = "20"
                                   dataTestId =  "footer-mail-field"
                    />
                    <Socials/>
                </div>
            </div>
        </div>
    );
}

export default InputBar;