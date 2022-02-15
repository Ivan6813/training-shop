import React from "react";
import Socials from "../../Socials/Socials";
import "./Input-bar.scss";

function InputBar() {

    return (
        <div className = "input-bar">
            <div className = "container">
                <div className = "wrapper-input-bar">
                    <div className = "input-bar-text">Be in touch with us:</div>
                    <form className = "footer-form">
                        <input type = "text" 
                               className = "footer-input" 
                               placeholder = "Enter your email" 
                        />
                        <button className = "footer-button">join us</button>
                    </form>
                    <Socials/>
                </div>
            </div>
        </div>
    );
}

export default InputBar;