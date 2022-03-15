import React from "react";
import { footerUsefulLinks } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function UsefulLinks() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Useful links</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerUsefulLinks.map(item => {
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

export default UsefulLinks;