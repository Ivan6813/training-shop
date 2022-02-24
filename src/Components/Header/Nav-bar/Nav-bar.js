import React, {useState, useEffect} from "react";
import BurgerMenuBtn from "../../Burger-menu-btn/Burger-menu-btn";
import BurgerMenu from "../../Burger-menu/Burger-menu";
import { headerNav } from "../../constants/constants";
import { userBlock } from "../../constants/constants";
import { Link } from "react-router-dom";
import "./Nav-bar.scss";

function NavBar() {

    const [isMenuOpen, toggleMenuMode] = useState(false);

    useEffect(() => {
        if(isMenuOpen) {
            document.body.classList.add('lock');
        }else {
            document.body.classList.remove('lock');
        }
    });

    return (
        <div onClick = {(e) => {if(e.target.className !== "burger-menu") toggleMenuMode(false)}}>
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
                                    <Link className = "nav-link" 
                                        to = {`/${item.path}`} 
                                        data-test-id = {`menu-link-${item.path}`}
                                    >{item.name}</Link>
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
                    <BurgerMenuBtn isMenuOpen = {isMenuOpen} toggleMenuMode = {toggleMenuMode}/>
                </div>
            </div>
            {(isMenuOpen) ? (
               <BurgerMenu isMenuOpen = {isMenuOpen} 
                           toggleMenuMode = {toggleMenuMode}
                           navList = {headerNav}
                /> 
            ):(
                <div></div>
            )}
        </div>
       
  );
}

export default NavBar;
