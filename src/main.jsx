import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Xx: importing a css file would normally not work in the browser, but it is a newer feature and is transformed under the hood.

ReactDOM.createRoot(document.getElementById("root")).render(
  // Xx: this gets the element with root id from the HTML and renders the react code below
  // Xx: strictMode is a feature in react which enables some additional checks and warns us of suboptimal code, including outdated code
  // Xx: adding the App as an HTML element
  // Xx: this is possible because of react components, which generally return JSX code (html inside js code; could return other code other than jsx)
  // Xx: indeed, the App file simply returns the html code for hello world
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
