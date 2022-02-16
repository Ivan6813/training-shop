import React from "react";
import { headerNav } from "../../constants/constants";
import { userBlock } from "../../constants/constants";
import { Link } from "react-router-dom";
import "./Nav-bar.scss";

function NavBar() {

    return (
        <div className = "container">
            <div className = "nav-bar">
                <Link to = "/" data-test-id = "header-logo-link">
                    <h1 className = "header-logo">CleverShop</h1>
                </Link>
                <nav className = "nav-menu" data-test-id = "menu">
                    <ul className = "nav-list">
                        {headerNav.map(item => {
                            return ( 
                            <li className = "nav-item" key = {item.id}>
                                <Link className = "nav-link" to  = {item.path}>{item.name}</Link>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                <ul className = "user-block-list">
                    {userBlock.map((item, i) => {
                        return (
                        <li className = "user-block-item" key = {i}>
                            <Link to= "/">
                                <img className = "user-block-icon" src = {item} alt = "icon"/>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
  );
}

export default NavBar;
