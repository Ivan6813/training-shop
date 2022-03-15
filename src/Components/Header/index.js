import React, {useState} from "react";
import TopBar from "./Top-bar/Top-bar";
import NavBar from "./Nav-bar/Nav-bar";
import Cart from "../Cart/index";
import "./header.scss";

function Header() {

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className = "header" data-test-id = "header">
            <TopBar/>
            <NavBar isCartOpen = {isCartOpen} setIsCartOpen = {setIsCartOpen}/>
            {isCartOpen && <Cart setIsCartOpen = {setIsCartOpen}/>}
        </header>
    );
}

export default Header;
