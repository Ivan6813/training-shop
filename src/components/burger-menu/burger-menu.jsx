import {Link} from "react-router-dom";
import classNames from "classnames";
import "./burger-menu.scss";

const BurgerMenu = ({isMenuOpen, toggleMenuMode, navList}) => {

    const closeMenu = (event) => {
        event.stopPropagation();
        if(event.target.className === "burger-nav-link") {
            toggleMenuMode(false);
        }
    };

    return (
        <div 
            className = {classNames("burger-menu", {show: isMenuOpen})} 
            onClick = {closeMenu}
            data-test-id = "burger-menu"
        >
            <nav className = "burger-nav-menu">
                <ul className = "burger-nav-list">
                    {navList.map(({path, name}) => (
                        <li className = "burger-nav-item" key = {path}>
                            <Link 
                                className = "burger-nav-link" 
                                to = {`/${path}`} 
                                data-test-id = {`menu-link-${path}`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
  );
};

export default BurgerMenu;
