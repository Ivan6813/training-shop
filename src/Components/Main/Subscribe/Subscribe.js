import React from "react";
import SubscribeForm from "../../Subscribe-form/Subscribe-form";
import women from "../../../img/subscribe-block-women.png";
import men from "../../../img/subscribe-block-men.png";
import "./Subscribe.scss";

function Subscribe() {

    return (
        <div className = "wrapper-subscribe-block">
            <div className = "subscribe-block">
                <div className = "subscribe-block-title">Special Offer</div>
                <div className = "subscribe-block-subtitle">
                    Subscribe{"\n"} And <span>Get 10% Off</span>
                </div>
                <SubscribeForm 
                    prefix = "main"
                    btnText = "Subscribe"
                    loaderSize = "30"
                    dataTestId = "main-subscribe-mail-field"
                />
                <img className = "subscribe-block-women" src = {women} alt = "women" />
                <img className = "subscribe-block-men" src = {men} alt = "men" />
            </div>
        </div>
    );
}

export default Subscribe;