import React from "react";

function Information() {

    const information = ["About Us", "Contact Us", "Blog", "FAQs"];

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Information</div>
            <nav>
                <ul className = "footer-nav-list">
                    {information.map((item, i) => {
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