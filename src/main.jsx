import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // tailwind css
// import "./main.css"; // vanilla css
import App from "./App";
import Counter from "./components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter />
    {/* <App /> */}
  </React.StrictMode>
);
