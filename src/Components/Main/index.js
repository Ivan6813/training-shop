import React from "react";
import Slider from "./Slider/Slider";
import Benefits from "./Benefits/Benefits";
import WomenClothes from "./Clothes/Women-clothes";
import MenClothes from "./Clothes/Men-clothes";
import Info from "./Info/Info";
import Subscribe from "./Subscribe/Subscribe";
import Blog from "./Blog/Blog";
import "./main.scss";

function Main() {

    return (
        <main className = "main">
            <Slider/>
            <Benefits/>
            <WomenClothes/>
            <MenClothes/>
            <Info/>
            <Subscribe/>
            <Blog/>
        </main>
    );
}

export default Main;