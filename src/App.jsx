import Course from "./components/Course.jsx";
import User from "./components/User.jsx";

let cards = ["react", "node", "git"];
let reactData = {
  course: { title: "REACT", price: 1200, duration: "3 months" },
};
let nodeData = {
  course: { title: "NODE", price: 1560, duration: "2months" },
};

let userStyle = {
  display: "flex",
  gap: "1rem",
};

function App() {
  return (
    <div>
      <h2>Our Courses ({cards.length})</h2>
      <Course data={reactData} />;
      <Course data={nodeData} />
      <Course />
      <h2>Users</h2>
      <div style={userStyle}>
        <User name="ram" age={12} address="boudha" />
        <User />
        <User />
      </div>
    </div>
  );
}
export default App;
