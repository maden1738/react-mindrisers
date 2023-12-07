import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

function Course(props) {
  // { props: {data:course:title:""}} }
  return (
    <div class="card">
      <p class="title">{props.data?.course.title}</p> {/* optional chaining */}
      <p>price: Rs.{props.data?.course.price}</p>
      <p>duration: {props.data?.course.duration}</p>
      <hr />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae ipsum
      a. Dolorum voluptatum consequuntur, dolorem placeat, fugit consectetur
      exercitationem amet rem esse expedita mollitia velit explicabo sunt quae
      quibusdam?
    </div>
  );
}

const User = (props) => {
  let { age, name, address } = props;
  return (
    <div className="card">
      <p>
        {name} ({age})
      </p>
      <p>{address}</p>
    </div>
  );
};

let cards = ["react", "node", "git"];
let reactData = {
  course: { title: "REACT", price: 1200, duration: "3 months" },
};
let nodeData = {
  course: { title: "NODE", price: 1560, duration: "2months" },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Our Courses ({cards.length})</h1>
    {/* <Course title="Node" price="1200" duration="3" /> */}
    <Course data={reactData} />
    <Course data={nodeData} />
    <Course />
    <User name="ram" age="12" address="boudha" />
  </React.StrictMode>
);
