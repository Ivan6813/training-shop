import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import "./Burger-menu.scss";


function BurgerMenu({isMenuOpen, toggleMenuMode, navList}) {

    function closeMenu(event) {
        if(event.target.className === "burger-nav-link") {
            toggleMenuMode(false);
        }else {
            event.stopPropagation();
        }
    }

    return (
        <div 
            className = {classNames("burger-menu", {show: isMenuOpen})} 
            onClick = {(event) => {closeMenu(event)}}
            data-test-id = "burger-menu"
        >
            <nav className = "burger-nav-menu">
                <ul className = "burger-nav-list">
                    {navList.map(item => {
                        return ( 
                            <li className = "burger-nav-item" key = {uuidv4()}>
                                <Link 
                                    className = "burger-nav-link" 
                                    to = {`/${item.path}`} 
                                    data-test-id = {`menu-link-${item.path}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
  );
}

export default BurgerMenu;
