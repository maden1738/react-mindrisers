import axios from "axios";
import { useState } from "react";

export default function ApiUserList() {
  const [users, setUsers] = useState([]);
  // make aoi call
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     console.log(res);
  //     setUsers(res.data);
  //   });

  const [selectedOption, setSelectedOption] = useState("");
  let options = ["one", "two", "three"];
  return (
    <>
      <h1 className="text-5xl">The user has selected {selectedOption}</h1>
      <hr className="my-5" />
      <ul className="pl-5">
        {options.map((el) => (
          <li
            onClick={() => setSelectedOption(el)}
            className="hover:text-purple-500 cursor-pointer"
          >
            {el}
          </li>
        ))}
      </ul>
      <hr className="my-5" />
      <h1>api users list</h1>
    </>
  );
}
