import MainSlider from "./main-slider/main-slider";
import Benefits from "./benefits/benefits";
import Clothes from "./clothes/index";
import Info from "./info/info";
import Subscribe from "./subscribe/subscribe";
import Blog from "./blog/blog";
import "./main.scss";

const Main = () => (

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

export default Main;