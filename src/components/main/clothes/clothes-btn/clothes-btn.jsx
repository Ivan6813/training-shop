import {Link} from "react-router-dom";
import "./clothes-btn.scss";

const BtnBlock = ({category}) => (

    <div className = "container">
         <Link to = {`/${category}`} className = "clothes-btn">
            See all
        </Link>
    </div>
);

export default BtnBlock;