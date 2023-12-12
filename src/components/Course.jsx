import EditButton from "./EditButton";

import DefaultButton, { ViewButton, RemoveButton } from "./Buttons"; // importing defaulot export Button as DefaultButton
function Course(props) {
  // { props: {data:course:title:""}} }
  return (
    <div className="card">
      {/* <p className="title">{props.data?.course.title}</p> */}
      {/* optional chaining */}
      {/* <p>price: Rs.{props.data?.course.price}</p>
      <p>duration: {props.data?.course.duration}</p> */}
      <p className="title">{props.title}</p>
      <ViewButton />
      <EditButton />
      <RemoveButton />
      <DefaultButton />
      <hr />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae ipsum
      a. Dolorum voluptatum consequuntur, dolorem placeat, fugit consectetur
      exercitationem amet rem esse expedita mollitia velit explicabo sunt quae
      quibusdam?
    </div>
  );
}

export default Course;
