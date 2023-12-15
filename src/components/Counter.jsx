import { useState } from "react";

export default function Counter() {
  let count = 100;
  function increment() {
    count += 1;
    console.log("incrememnt ", count);
  }
  function decrement() {
    count -= 1;
    console.log("decrement ", count);
  }

  const [data, setValue] = useState(999); // important code
  function incrementValue() {
    setValue(data + 1); // state variable must not be changed directly, only shall be done throough mutator function
  }
  function decrementValue() {
    setValue(data - 1);
  }
  console.log("rendered");
  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>Value: {data}</h1>
      <hr />
      <button onClick={increment}>increment count</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incrementValue}>increment state value</button>
      <button onClick={decrementValue}>decrement state value</button>
    </>
  );
}
