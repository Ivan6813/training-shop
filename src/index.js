import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./Components/App/App";
import ScrollToTop from "./Components/Scroll-to-top/Scroll-to-top";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
