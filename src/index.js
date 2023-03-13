import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { APIKEY } from "./context";
import { GlobalStyle } from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIKEY.Provider value="9b02e22de941a3d770c1fede57e99110">
      <GlobalStyle />
      <Routing />
    </APIKEY.Provider>
  </React.StrictMode>
);

