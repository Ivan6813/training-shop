import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {footerUsefulLinks} from "../../../constants/constants";

const UsefulLinks = () => (

    <div className = "footer-nav-block">
        <div className = "footer-nav-title">Useful links</div>
         <nav>
            <ul className = "footer-nav-list">
                {footerUsefulLinks.map(({path, name}) => ( 
                    <li className = "footer-nav-item" key = {uuidv4()}>
                        <Link className = "footer-nav-link" to = {path}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>       
    </div>
);

export default UsefulLinks;