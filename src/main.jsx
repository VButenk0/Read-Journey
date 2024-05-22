import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./styles/common.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Global />
    </BrowserRouter>
  </React.StrictMode>
);
