import React from "react";
import women from "../../img/subscribe-block-women.png";
import men from "../../img/subscribe-block-men.png";

function Subscribe() {

    return (
        <div className = "wrapper-subcribe-block">
            <div className = "container">
                <div className = "subcribe-block">
                    <div className = "subcribe-block-title">Special Offer</div>
                    <div className = "subcribe-block-subtitle">Subscribe{"\n"} And <span>Get 10% Off</span></div>
                    <form className = "subscribe-form">
                        <input className = "subcribe-form-input" type="text" placeholder = "Enter your email"/>
                        <button className = "subcribe-form-btn">Subscribe</button>
                    </form>
                    <img className = "subcribe-block-women" src = {women} alt = "women" />
                    <img className = "subcribe-block-men" src = {men} alt = "men" />
                </div>
            </div>
        </div>
    );
}

export default Subscribe;