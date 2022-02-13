import React from "react";
import Slider from "./Slider";
import Benefits from "./Benefits";
import "./index.scss";
import Info from "./Info";


function Main() {

    return (
        <main className = "main">
            <Slider/>
            <Benefits/>
            <Info/>
        </main>
    );
}

export default Main;