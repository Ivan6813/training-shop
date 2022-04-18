import classNames from "classnames";
import "./nav-bar-cart.scss";

const NavBarCart = ({cartSection}) => (

    <nav className = "cart-nav-bar">
        <div className = "cart-container">
            <ul className = "cart-nav-lits">
                <li className = {classNames("cart-nav-item", {cart_section_activ: cartSection === 0})}>
                    Item in cart
                </li>
                <li className = "cart-nav-item">
                    /
                </li>
                <li className = {classNames("cart-nav-item", {cart_section_activ: cartSection === 1})}>
                    Delivery Info
                </li>
                <li className = "cart-nav-item">
                    /
                </li>
                <li className = {classNames("cart-nav-item", {cart_section_activ: cartSection === 2})}>
                    Payment
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBarCart;