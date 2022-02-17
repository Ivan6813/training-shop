import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Categories from "../Categories";
import ProductPage from "../Product-page";
import ErrorPage from "../Error-page/Error-page";
import Footer from "../Footer";
import "./App.scss";


function App() {

  return (
    <div className = "app" data-test-id = "app">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/:category" element = {<Categories/>}/>
        <Route path = "/:category/:id" element = {<ProductPage/>}/>
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
