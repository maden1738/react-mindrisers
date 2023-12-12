// import { Fragment } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
const User = (props) => {
  let { age, name, address } = props;
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <img src="https://picsum.photos/200/200" alt="" />
      <p style={{ textAlign: "center" }}>RAm</p>
      <EditButton />
      <DeleteButton />
    </div>
  );
};

export default User;
