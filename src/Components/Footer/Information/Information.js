import React from "react";
import { footerInformation } from "../../constants/constants";

function Information() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Information</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerInformation.map((item, i) => {
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

export default Information;