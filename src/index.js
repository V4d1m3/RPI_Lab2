import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";
import "./index.css";
import Site from "./site";

import "./i18n";

const main_root = ReactDOM.createRoot(document.getElementById("root"));
main_root.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
);
