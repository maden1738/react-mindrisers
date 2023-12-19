import axios from "axios";
import { useState } from "react";

export default function ApiComments() {
  const [comments, setComments] = useState([]);
  function fetchAPi() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
  }
  return (
    <>
      <button className="btn" onClick={fetchAPi}>
        FETCH API
      </button>
      <hr className="m-3" />
      <div className="text-3xl"> api comments</div>
      <ul className="pl-10 list-disc">
        {comments.map((el) => (
          <li>{el.body}</li>
        ))}
      </ul>
    </>
  );
}
