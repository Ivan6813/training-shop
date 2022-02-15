import React from "react";
import TopBar from "./Top-bar/Top-bar";
import NavBar from "./Nav-bar/Nav-bar";
import "./header.scss";

function Header() {

    return (
        <header className = "header" data-test-id = "header">
            <TopBar/>
            <NavBar/>
        </header>
    );
}

export default Header;
