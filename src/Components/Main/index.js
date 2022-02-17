import React from "react";
import Slider from "./Slider/Slider";
import Benefits from "./Benefits/Benefits";
import Clothes from "./Clothes/index";
import Info from "./Info/Info";
import Subscribe from "./Subscribe/Subscribe";
import Blog from "./Blog/Blog";
import "./main.scss";

function Main() {

    return (
        <main className = "main">
            <Slider/>
            <Benefits/>
            <Clothes productType = {"women"}/>
            <Clothes productType = {"men"}/>
            <Info/>
            <Subscribe/>
            <Blog/>
        </main>
    );
}

export default Main;