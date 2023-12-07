import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

function Card() {
  return (
    <div class="card">
      <p class="title">REACT</p>
      <p>easy</p>
      <hr />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae ipsum
      a. Dolorum voluptatum consequuntur, dolorem placeat, fugit consectetur
      exercitationem amet rem esse expedita mollitia velit explicabo sunt quae
      quibusdam?
    </div>
  );
}

let cards = ["react", "node", "git"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>React</h1>
    <h2>Element</h2>
    <h2>Component</h2>
    <h2>Total cards: {cards.length}</h2>

    {/* <Card /> reusing component */}
    <Card title="React" price="1200" />
    <Card />
    <Card />
  </React.StrictMode>
);
