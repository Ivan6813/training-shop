import {v4 as uuidv4} from "uuid";
import {footerContacts} from "../../../constants/constants";

const Contacts = () => (

    <div className = "footer-nav-block">
        <div className = "footer-info-title">Contact us</div>
        <ul className = "footer-info-list">
            {footerContacts.map(({icon, text}) => ( 
                <li className = "footer-info-item" key = {uuidv4()}>
                    <img className = "footer-info-icon" src = {icon} alt = "icon"/>
                    <div className = "footer-info-text">{text}</div>
                </li>
            ))}
        </ul>
    </div>        
);

export default Contacts;