import React from "react";
import { blogs } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./Blog.scss";

function Blog() {

    return (
        <div className = "container">
            <div className = "blog-block">
                <div className = "header-blog">
                   <div className = "header-blog-title">LATEST FROM BLOG</div>
                   <Link className = "header-blog-link" to = "/">See all</Link>
                </div>
                <ul className = "blog-list">
                    {blogs.map(item => {
                        return (
                        <li className = "blog-item" key = {uuidv4()}>
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