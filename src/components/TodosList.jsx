import { useState } from "react";

export default function TodosList() {
  const [todos, setTodos] = useState([
    { title: "html", status: "completed" },
    { title: "css", status: "incomplete" },
  ]);

  const [pageTitle, setPage] = useState("Todos");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputTitle = e.target.title.value;
    let inputStatus = e.target.status.value;
    let userInput = { title: inputTitle, status: inputStatus };
    let temp = [...todos]; // research : reference data types
    temp.push(userInput);
    setTodos(temp);
  };

  const removeElement = (event) => {
    let index = event.target.id;
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
    // let remainingTodos = [...todos].filter((el, id) => id != index)
  };

  return (
    <>
      <h1 className="text-5xl">Todos list</h1>
      <hr className="my-5" />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          className="border border-black ml-10 mr-4"
        />
        <select name="status" id="" className="border border-black">
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button className="bg-gray-300 ml-5">Add to list</button>
      </form>
      <table className="border border-black mx-10 my-5  ">
        <thead>
          <tr>
            <th className="border border-collapse border-black bg-gray-400 p-5">
              TITLE
            </th>
            <th className="border border-collapse border-black bg-gray-400 p-5">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el, index) => (
            <tr>
              <td className="border border-collapse border-black p-3">
                {el.title}
              </td>
              <td
                className={`border border-collapse border-black p-3 ${
                  el.status === "completed" ? "bg-green-300" : "bg-red-300"
                }`}
              >
                {el.status}
                <button
                  className="ml-5 bg-white p-1 rounded-lg"
                  id={index}
                  onClick={removeElement}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
