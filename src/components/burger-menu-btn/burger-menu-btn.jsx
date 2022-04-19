import classNames from "classnames";
import "./burger-menu-btn.scss";

const BurgerMenuBtn = ({isMenuOpen, toggleMenuMode}) => {

    const showMenu = (event) => {
        event.stopPropagation();
        toggleMenuMode(!isMenuOpen);
    };

    return (
        <button 
            onClick = {showMenu} 
            className = "burger-menu-btn"
            data-test-id = "burger-menu-btn"
        >
            <span className = {classNames("burger-top-line", {visible: isMenuOpen})}></span>
            <span className = {classNames("burger-midle-line", {visible: isMenuOpen})}></span>
            <span className = {classNames("burger-bottom-line", {visible: isMenuOpen})}></span>
        </button>
    );
};

export default BurgerMenuBtn;