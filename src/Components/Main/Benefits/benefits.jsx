import {v4 as uuidv4} from "uuid";
import {benefits} from "../../../constants/constants";
import "./benefits.scss";

const Benefits = () => (

    <div className = "container">
        <div className = "benefits-block">
            <ul className = "benefits-list">
                {benefits.map(({title, text, icon}) => ( 
                    <li className = "benefits-item" key = {uuidv4()}>
                        <div className = "benefits-icon-block">
                            <img className = "benefits-icon" src = {icon} alt = "icon"/>
                        </div>
                        <div className = "benefits-text-block">
                            <div className = "benefits-title">{title}</div>
                            <div className = "benefits-text">{text}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default Benefits;