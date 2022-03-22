import React from "react";
import MainSlider from "./Main-slider/Main-slider";
import Benefits from "./Benefits/Benefits";
import Clothes from "./Clothes/index";
import Info from "./Info/Info";
import Subscribe from "./Subscribe/Subscribe";
import Blog from "./Blog/Blog";
import "./main.scss";

function Main() {

    return (
        <main className = "main">
            <MainSlider/>
            <Benefits/>
            <Clothes category = {"women"}/>
            <Clothes category = {"men"}/>
            <Info/>
            <Subscribe/>
            <Blog/>
        </main>
    );
}

export default Main;