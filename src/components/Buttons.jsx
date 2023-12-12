import { FaTrash, FaEye } from "react-icons/fa";

// named exports
// export function ChangeButton() {
//   return (
//     <button style={{ backgroundColor: "skyblue" }}>
//       <CiEdit />
//       Change
//     </button>
//   );
// }

export function RemoveButton() {
  return (
    <button style={{ backgroundColor: "#F1520E" }}>
      <FaTrash />
      Remove
    </button>
  );
}

export function ViewButton() {
  return (
    <button>
      <FaEye />
      View
    </button>
  );
}

const Button = () => {
  return <button>default</button>;
};

export default Button;
