import React from "react";
import Header from "../Header/index";
import Footer from "../Footer";
import "./App.scss";

function App() {

  return (
    <div className = "app" data-test-id = "app">
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
