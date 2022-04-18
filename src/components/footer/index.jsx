import InputBar from "./input-bar/input-bar";
import Categories from "./categories/categories";
import Information from "./information/information";
import UsefulLinks from "./useful-links/useful-links";
import Contacts from "./contacts/contacts";
import CopyrightBar from "./copyright-bar/copyright-bar";
import "./footer.scss";

const Footer = () => (

    <footer className = "footer" data-test-id = "footer">
        <InputBar/>
        <div className = "container">
            <div className = "footer-nav">
                <Categories/>
                <Information/>
                <UsefulLinks/>
                <Contacts/>
            </div>
        </div>
        <CopyrightBar/>
    </footer>
);

export default Footer;
