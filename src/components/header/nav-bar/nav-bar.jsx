import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import BurgerMenuBtn from "../../burger-menu-btn/burger-menu-btn";
import BurgerMenu from "../../burger-menu/burger-menu";
import {headerNav} from "../../../constants/constants";
import "./nav-bar.scss";

const NavBar = ({isCartOpen, setIsCartOpen}) => {

    const [isMenuOpen, toggleMenuMode] = useState(false);
    const {isReviewsModalWindowOpen} = useSelector(state => state.review);
    const {order} = useSelector(state => state.order);

    const closeBurgerMenu = (event) => {
        if(event.target.className !== "burger-menu") {
            toggleMenuMode(false);
        }
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    useEffect(() => {
        if(isMenuOpen || isCartOpen || isReviewsModalWindowOpen) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    });

    return (
        <div onClick = {closeBurgerMenu}>
            <div className = "container">
                <div className = "nav-bar">
                    <Link 
                        to = "/" 
                        className = "header-logo-link" 
                        data-test-id = "header-logo-link"
                    >
                        <h1 className = "header-logo">CleverShop</h1>
                    </Link>
                    <nav className = "nav-menu" data-test-id = "menu">
                        <ul className = "nav-list">
                            {headerNav.map(({path, name}) => ( 
                                <li className = "nav-item" key = {uuidv4()}>
                                    <Link 
                                        className = "nav-link" 
                                        to = {`/${path}`} 
                                        data-test-id = {`menu-link-${path}`}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className = "user-block-list">
                        <li className = "user-block-item">
                            <button className = "user-block-search-btn"/>
                        </li>
                        <li className = "user-block-item">
                            <button className = "user-block-site-btn"/>
                        </li>
                        <li className = "user-block-item">
                            <button className = "user-block-customer-btn"/>
                        </li>
                        <li 
                            onClick = {openCart}
                            className = "user-block-item"
                            data-test-id = "cart-button"
                        >
                            <button  className = "user-block-cart-btn"/>
                            {!!order.length && <span className = "user-block-cart-quantity">{order.length}</span>}
                        </li>
                    </ul>
                    <BurgerMenuBtn 
                        isMenuOpen = {isMenuOpen} 
                        toggleMenuMode = {toggleMenuMode}
                    />
                </div>
            </div>
            {isMenuOpen &&
            <BurgerMenu 
                isMenuOpen = {isMenuOpen} 
                toggleMenuMode = {toggleMenuMode}
                navList = {headerNav}
            /> 
            }
        </div>  
  );
};

export default NavBar;
