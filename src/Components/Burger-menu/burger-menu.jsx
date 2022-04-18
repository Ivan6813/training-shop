import {Link} from "react-router-dom";
import classNames from "classnames";
import {v4 as uuidv4} from "uuid";
import "./burger-menu.scss";


const BurgerMenu = ({isMenuOpen, toggleMenuMode, navList}) => {

    const closeMenu = (event) => {
        if(event.target.className === "burger-nav-link") {
            toggleMenuMode(false);
        }else {
            event.stopPropagation();
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
                        <li className = "burger-nav-item" key = {uuidv4()}>
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
