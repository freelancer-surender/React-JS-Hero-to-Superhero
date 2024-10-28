import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirstLevel from "./WithoutContext/FirstLevel";
import LevelOne from "./WithContext/LevelOne";
import { Provider } from "./MessageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider>
    <div className="title">First Level</div>
    {/* <FirstLevel /> */}
    <LevelOne />
  </Provider>

  // </React.StrictMode>
);
