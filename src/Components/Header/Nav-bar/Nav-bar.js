import React from "react";
import { headerNav } from "../../constants/constants";
import { userBlock } from "../../constants/constants";
import "./Nav-bar.scss";

function NavBar() {

    return (
        <div className = "container">
            <div className = "nav-bar">
                <a href = "/" data-test-id = "header-logo-link">
                    <h1 className = "header-logo">CleverShop</h1>
                </a>
                <nav className = "nav-menu" data-test-id = "menu">
                    <ul className = "nav-list">
                        {headerNav.map((item, i) => {
                            return ( 
                            <li className = "nav-item" key = {i}>
                                <a className = "nav-link" href  ="/">{item}</a>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                <ul className = "user-block-list">
                    {userBlock.map((item, i) => {
                        return (
                        <li className = "user-block-item" key = {i}>
                            <a href = "/">
                                <img className = "user-block-icon" src = {item} alt = "icon"/>
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
  );
}

export default NavBar;
