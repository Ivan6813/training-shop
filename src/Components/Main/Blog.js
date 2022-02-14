import React from "react";
import blog_img_1 from "../../img/Blog-img-1.png";
import blog_img_2 from "../../img/Blog-img-2.png";
import blog_img_3 from "../../img/Blog-img-3.png";

function Blog() {

    const arrBlog = [
        {
            title: "The Easiest Way to Break", 
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: blog_img_1
        },
        {
            title: "Wedding Season", 
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: blog_img_2
        },
        {
            title: "Recent Favorites On Repeat", 
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: blog_img_3
        }
    ]

    return (
        <div className = "container">
            <div className = "blog-block">
                <div className = "header-blog">
                   <div className = "header-blog-title">LATEST FROM BLOG</div>
                   <a className = "header-blog-link" href = "/">See all</a>
                </div>
                <ul className = "blog-list">
                    {arrBlog.map((item, i) => {
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