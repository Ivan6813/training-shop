import React from "react";
import Slider from "./Slider";
import Benefits from "./Benefits";
import "./index.scss";
import Info from "./Info";
import Subscribe from "./Subscribe";


function Main() {

    return (
        <main className = "main">
            <Slider/>
            <Benefits/>
            <Info/>
            <Subscribe/>
        </main>
    );
}

export default Main;