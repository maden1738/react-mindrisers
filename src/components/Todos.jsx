let todosString = ["html", "css", "js", "react", "express"];
let todos = [
  { title: "html", status: true },
  { title: "css", status: true },
  { title: "js", status: true },
  { title: "react", status: false },
];

let description = "ba ba black ship";
const Todos = () => {
  return (
    <>
      <h1>Todos ({todosString.length})</h1>
      <ul>
        {todosString.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
      <p>{description}</p>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) => (
            <tr>
              <td>{el.title}</td>
              <td>{el.status ? "completed" : "not completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
