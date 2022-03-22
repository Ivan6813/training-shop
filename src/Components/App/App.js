import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../redux/actions/index";
import Header from "../Header";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Main from "../Main";
import Categories from "../Categories";
import ProductPage from "../Product-page";
import ErrorPage from "../Error-page/Error-page";
import Footer from "../Footer";
import Cart from "../Cart/index";
import "./App.scss";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const {isLoading, isError} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className = "app" data-test-id = "app">
      <Header isCartOpen = {isCartOpen} setIsCartOpen = {setIsCartOpen}/>
      {isLoading && <Loader/>}
      {isError && <Error/>}
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/:category" element = {<Categories/>}/>
        <Route path = "/:category/:id" element = {<ProductPage/>}/>
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
      <Cart isCartOpen = {isCartOpen} setIsCartOpen = {setIsCartOpen}/>
    </div>
  );
}

export default App;
