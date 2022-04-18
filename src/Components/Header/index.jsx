import TopBar from "./top-bar/top-bar";
import NavBar from "./nav-bar/nav-bar";
import "./header.scss";

const Header = ({isCartOpen, setIsCartOpen}) => (

    <header className = "header" data-test-id = "header">
        <TopBar/>
        <NavBar 
            isCartOpen = {isCartOpen} 
            setIsCartOpen = {setIsCartOpen}
        />
    </header>  
);

export default Header;
