import React from "react";
import { footerCategories } from "../../constants/constants";

function Categories() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Categories</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerCategories.map((item, i) => {
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

export default Categories;