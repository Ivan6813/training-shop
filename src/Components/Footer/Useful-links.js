import React from "react";

function UsefulLinks() {

    const links = ["Terms & Conditions", "Returns & Exchanges", "Shipping & Delivery", "Privacy Policyauty"];

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Useful links</div>
            <nav>
                <ul className = "footer-nav-list">
                    {links.map((item, i) => {
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