import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//import {storecontextprovider} from "./component/context/storecontext"
import Storecontextprovider from "./component/context/storecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Storecontextprovider>
        <App />
      </Storecontextprovider>
    </React.StrictMode>
  </BrowserRouter>
);
