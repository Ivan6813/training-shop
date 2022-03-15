import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {HashRouter} from "react-router-dom";
import App from "./Components/App/App";
import ScrollToTop from "./Components/Scroll-to-top/Scroll-to-top";
import store from "./Store/index";


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HashRouter>
        <ScrollToTop />
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
