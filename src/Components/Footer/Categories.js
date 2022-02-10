import React from "react";

function Categories() {

    const categories = ["Men", "Women", "Accessories", "Beauty"];

    return (
        <div className = "footer-nav-block">
            <div className = "footer-nav-title">Categories</div>
            <nav>
                <ul className = "footer-nav-list">
                    {categories.map((item, i) => {
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