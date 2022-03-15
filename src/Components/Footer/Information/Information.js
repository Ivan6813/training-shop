import React from "react";
import { footerInformation } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Information() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Information</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerInformation.map(item => {
                        return ( 
                        <li className = "footer-nav-item" key = {uuidv4()}>
                            <Link className = "footer-nav-link" to = {item.path}>{item.name}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>       
        </div>
    );
}

export default Information;