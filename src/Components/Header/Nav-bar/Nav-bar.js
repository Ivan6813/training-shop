import React, {useState, useEffect} from "react";
import BurgerMenuBtn from "../../Burger-menu-btn/Burger-menu-btn";
import BurgerMenu from "../../Burger-menu/Burger-menu";
import { headerNav } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./Nav-bar.scss";

function NavBar({isCartOpen, setIsCartOpen}) {

    const [isMenuOpen, toggleMenuMode] = useState(false);
    const {isReviewsModalWindowOpen} = useSelector(state => state.review);

    useEffect(() => {
        if(isMenuOpen || isCartOpen || isReviewsModalWindowOpen) {
            document.body.classList.add('lock');
        }else {
            document.body.classList.remove('lock');
        }
    });

    const {order}= useSelector(state => state.order);

    return (
        <div onClick = {(e) => {if(e.target.className !== "burger-menu") toggleMenuMode(false)}}>
            <div className = "container">
                <div className = "nav-bar">
                    <Link to = "/" className = "header-logo-link" data-test-id = "header-logo-link">
                        <h1 className = "header-logo">CleverShop</h1>
                    </Link>
                    <nav className = "nav-menu" data-test-id = "menu">
                        <ul className = "nav-list">
                            {headerNav.map(item => {
                                return ( 
                                <li className = "nav-item" key = {uuidv4()}>
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
                        <li className = "user-block-item"><button className = "user-block-search-btn"></button></li>
                        <li className = "user-block-item"><button className = "user-block-site-btn"></button></li>
                        <li className = "user-block-item"><button className = "user-block-customer-btn"></button></li>
                        <li onClick = {() => setIsCartOpen(true)} className = "user-block-item" data-test-id = "cart-button">
                            <button  className = "user-block-cart-btn"></button>
                            {!!order.length && <span className = "user-block-cart-quantity">{order.length}</span>}
                        </li>
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
