import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import "./index.css";
import App from "./App";
import DetailContextProvider from "./context/DetailContext";
import SearchContextProvider from "./context/SearchContext";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <DetailContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </DetailContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
