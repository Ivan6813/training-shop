import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./App.scss";

function App() {

  return (
    <div className = "app" data-test-id = "app">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
