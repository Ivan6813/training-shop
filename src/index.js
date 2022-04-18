import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import App from "./components/app/app.jsx";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import store from "./redux/store/index";

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
