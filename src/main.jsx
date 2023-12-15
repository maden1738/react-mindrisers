import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // tailwind css
// import "./main.css"; // vanilla css
import App from "./App";
import Counter from "./components/Counter";
import GoogleTabs from "./GoogleTabs";
import ApiUserList from "./ApiUsersList";
import TodosList from "./components/TodosList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodosList />
    {/* <ApiUserList /> */}
    {/* <GoogleTabs /> */}
    {/* <Counter /> */}
    {/* <App /> */}
  </React.StrictMode>
);
