import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // tailwind css
// import "./main.css"; // vanilla css
import App from "./App";
import Counter from "./components/Counter";
import GoogleTabs from "./GoogleTabs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleTabs />
    <Counter />
    {/* <App /> */}
  </React.StrictMode>
);
