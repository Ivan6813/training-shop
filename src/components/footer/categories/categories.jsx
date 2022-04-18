import {v4 as uuidv4} from "uuid";
import {Link} from "react-router-dom";
import {footerCategories} from "../../../constants/constants";


const Categories = () => (

    <div className = "footer-nav-block">
        <div className = "footer-nav-title">Categories</div>
        <nav>
            <ul className = "footer-nav-list">
                {footerCategories.map(({path, name}) => ( 
                    <li className = "footer-nav-item" key = {uuidv4()}>
                        <Link 
                            className = "footer-nav-link" 
                            to = {`/${path}`}
                            data-test-id = {`footer-nav-link-${path}`}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>       
    </div>
);

export default Categories;