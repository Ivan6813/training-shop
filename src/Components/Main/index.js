import React from "react";
import Slider from "./Slider";
import Benefits from "./Benefits";
import "./index.scss";
import Info from "./Info";
import Subscribe from "./Subscribe";
import Blog from "./Blog";


function Main() {

    return (
        <main className = "main">
            <Slider/>
            <Benefits/>
            <Info/>
            <Subscribe/>
            <Blog/>
        </main>
    );
}

export default Main;