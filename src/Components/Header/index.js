import React from "react";
import "./index.scss";
import TopBar from "./Top-bar";
import NavBar from "./Nav-bar";


function Header() {

    return (
        <header className = "header" data-test-id = "header">
            <TopBar/>
            <NavBar/>
        </header>
    );
}

export default Header;
