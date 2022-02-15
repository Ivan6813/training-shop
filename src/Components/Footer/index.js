import React from "react";
import InputBar from "./Input-bar/Input-bar";
import Categories from "./Categories/Categories";
import Information from "./Information/Information";
import UsefulLinks from "./Useful-links/Useful-links";
import Contacts from "./Contacts/Contacts";
import CopyrightBar from "./Copyright-bar/Copyright-bar";
import "./footer.scss";


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
