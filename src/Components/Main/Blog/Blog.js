import React from "react";
import { blogs } from "../../constants/constants";
import "./Blog.scss";

function Blog() {

    return (
        <div className = "container">
            <div className = "blog-block">
                <div className = "header-blog">
                   <div className = "header-blog-title">LATEST FROM BLOG</div>
                   <a className = "header-blog-link" href = "/">See all</a>
                </div>
                <ul className = "blog-list">
                    {blogs.map((item, i) => {
                        return (
                        <li className = "blog-item" key = {i}>
                            <img className = "blog-item-img" src = {item.img} alt = "img"/>
                            <div className = "img-block-text">
                                <div className = "blog-item-title">{item.title}</div>
                                <p className = "blog-item-text">{item.text}</p>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Blog;