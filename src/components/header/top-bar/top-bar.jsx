import {v4 as uuidv4} from "uuid";
import Socials from "../../socials/socials";
import {topBarInfo} from "../../../constants/constants";
import "./top-bar.scss";

const TopBar = () => (

    <div className = "top-bar">
        <div className = "container">
            <div className = "info-block">
                <ul className = "info-list">
                    {topBarInfo.map(({icon, text}) => ( 
                        <li className = "info-item" key = {uuidv4()}>
                            <img className = "info-icon" src = {icon} alt = "icon"/>
                            <div className = "info-text">{text}</div>
                        </li>
                    ))}
                </ul>
                <Socials/>
            </div>
        </div>
    </div>
);

export default TopBar;
