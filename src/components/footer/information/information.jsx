import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {footerInformation} from "../../../constants/constants";

const Information = () => (

    <div className = "footer-nav-block">
        <div className = "footer-nav-title">Information</div>
        <nav>
            <ul className = "footer-nav-list">
                {footerInformation.map(({path, name}) => ( 
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

export default Information;