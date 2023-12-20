import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // tailwind css
// import "./main.css"; // vanilla css
import App from "./App";
import Counter from "./components/Counter";
import GoogleTabs from "./GoogleTabs";
import ApiUserList from "./ApiUsersList";
import TodosList from "./components/TodosList";
import ApiComments from "./components/ApiComments";
import ApiImages from "./components/ApiImages";
import ApiProductsAutoLoad from "./components/ApiProductsAutoLoad";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <TodosList /> */}
    {/* <ApiUserList /> */}
    {/* <GoogleTabs /> */}
    {/* <Counter /> */}
    {/* <App /> */}
    {/* <ApiComments /> */}
    {/* <ApiImages /> */}
    <ApiProductsAutoLoad />
  </React.StrictMode>
);
