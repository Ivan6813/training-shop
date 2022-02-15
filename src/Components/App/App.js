import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./App.scss";
// import Categories from "../Categories";
// import { womenClothes } from "../constants/constants";
// import { menClothes } from "../constants/constants";

function App() {

  return (
    <div className = "app" data-test-id = "app">
        <Header/>
        <Main/>
        {/* <Categories category = {"Women"} clothes = {womenClothes}/> */}
        {/* <Categories category = {"Men"} clothes = {menClothes}/> */}
        <Footer/>
    </div>
  );
}

export default App;
