import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import Loader from "../loader/loader";
import Error from "../error/error";
import Main from "../main";
import Categories from "../categories";
import ProductPage from "../product-page";
import ErrorPage from "../error-page/error-page";
import Footer from "../footer";
import Cart from "../cart/index";
import {getProducts} from "../../redux/actions/index";
import "./app.scss";

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const {isLoading, isError} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
};

export default App;
