import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Categories from "../Categories";
import ProductPage from "../Product-page";
import ErrorPage from "../Error-page/Error-page";
import Footer from "../Footer";
import Cart from "../Cart/index";
import "./App.scss";


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className = "app" data-test-id = "app">
      <Header isCartOpen = {isCartOpen} setIsCartOpen = {setIsCartOpen}/>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/:category" element = {<Categories/>}/>
        <Route path = "/:category/:id" element = {<ProductPage/>}/>
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
     {isCartOpen && <Cart isCartOpen = {isCartOpen} setIsCartOpen = {setIsCartOpen}/>}
    </div>
  );
}

export default App;
