import React from "react";
import Slider from "./Slider";
import Benefits from "./Benefits";
import "./index.scss";
import Info from "./Info";
import Subscribe from "./Subscribe";
import Blog from "./Blog";
import WomenClothes from "./Clothes/Women-clothes";
import MenClothes from "./Clothes/Men-clothes";


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