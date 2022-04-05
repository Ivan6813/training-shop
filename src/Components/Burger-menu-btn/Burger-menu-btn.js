import React from "react";
import classNames from "classnames";
import "./Burger-menu-btn.scss";

function BurgerMenuBtn({isMenuOpen, toggleMenuMode}) {

    function showMenu(event) {
        toggleMenuMode(!isMenuOpen);
        event.stopPropagation();
    }

    return (
        <button 
            onClick = {(event) => {showMenu(event)}} 
            className = "burger-menu-btn"
            data-test-id = "burger-menu-btn"
        >
            <span className = {classNames("burger-top-line", {visible: isMenuOpen})}></span>
            <span className = {classNames("burger-midle-line", {visible: isMenuOpen})}></span>
            <span className = {classNames("burger-bottom-line", {visible: isMenuOpen})}></span>
        </button>
    );
}

export default BurgerMenuBtn;