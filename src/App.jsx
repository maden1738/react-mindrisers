import Course from "./components/Course.jsx";
import User from "./components/User.jsx";
import Glass from "./assets/images/reacticon.png";
import EditButton from "./components/EditButton.jsx";
import DeleteButton from "./components/DeleteButton.jsx";
import Todos from "./components/Todos.jsx";

let cards = ["react", "node", "git"];
// let reactData = {
//   course: { title: "REACT", price: 1200, duration: "3 months" },
// };
// let nodeData = {
//   course: { title: "NODE", price: 1560, duration: "2months" },
// };

let userStyle = {
  display: "flex",
  gap: "1rem",
};

let users = [
  { name: "ram", email: "ram@g.com" },
  { name: "ram1", email: "ram@g.com" },
  { name: "ram2", email: "ram@g.com" },
  { name: "ram3", email: "ram@g.com" },
  { name: "ram4", email: "ram@g.com" },
];

let courses = ["react", "tailwind"];

function App() {
  return (
    <div>
      <Todos />
      <hr />
      <h2>Our Courses ({cards.length})</h2>
      <img src={Glass} alt="" width="60px" />
      <img src="/vite.svg" alt="" width="60px" />
      {/* <Course data={reactData} />;
      <Course data={nodeData} />
      <Course /> */}
      {courses.map((el) => (
        <Course title={el} />
      ))}
      <h2>Users</h2>
      <div style={userStyle}>
        <User name="ram" age={12} address="boudha" />
        <User />
        <User />
      </div>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>action</th>
        </tr>
        <tr>
          <td>xyz</td>
          <td>xyz@.com</td>
          <td>
            <EditButton />
            <DeleteButton />
          </td>
        </tr>
        <tr>
          <td>xyz</td>
          <td>xyz@.com</td>
          <td></td>
        </tr>
        <tr>
          <td>xyz</td>
          <td>xyz@.com</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
export default App;
