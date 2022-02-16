import React from "react";
import { footerCategories } from "../../constants/constants";
import { Link } from "react-router-dom";

function Categories() {

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Categories</div>
            <nav>
                <ul className = "footer-nav-list">
                    {footerCategories.map(item => {
                        return ( 
                        <li className = "footer-nav-item" key = {item.id}>
                            <Link className = "footer-nav-link" to = {item.path}>{item.name}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>       
        </div>
    );
}

export default Categories;