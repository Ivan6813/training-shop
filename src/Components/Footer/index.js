import React from "react";
import InputBar from "./Input-bar";
import Categories from "./Categories";
import Information from "./Information";
import UsefulLinks from "./Useful-links";
import Contacts from "./Contacts";
import CopyrightBar from "./Copyright-bar";
import "./index.scss";


function Footer() {

    return (
        <footer className = "footer" data-test-id = "footer">
            <InputBar/>
            <div className = "container">
                <div className = "footer-nav">
                    <Categories/>
                    <Information/>
                    <UsefulLinks/>
                    <Contacts/>
                </div>
            </div>
            <CopyrightBar/>
        </footer>
    );
}

export default Footer;
