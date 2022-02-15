import React from "react";
import { footerUsefulLinks } from "../../constants/constants";

function UsefulLinks() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Useful links</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerUsefulLinks.map((item, i) => {
                        return ( 
                        <li className = "footer-nav-item" key = {i}>
                            <a className = "footer-nav-link" href = "/">{item}</a>
                        </li>
                        )
                    })}
                </ul>
            </nav>       
        </div>
    );
}

export default UsefulLinks;