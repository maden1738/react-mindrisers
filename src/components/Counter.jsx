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
      <h1 className="text-2xl border">Counter: {count}</h1>
      <h1 className="text-5xl font-bold underline p-4 text-center">
        Value: {data}
      </h1>
      <div className="flex justify-center">
        <button className="border bg-gray-300 p-5 ml-5" onClick={increment}>
          increment count
        </button>
        <button className="border bg-blue-300 p-5 ml-5" onClick={decrement}>
          decrement count
        </button>
        <button
          className="border bg-green-300 p-5 ml-5"
          onClick={incrementValue}
        >
          increment state value
        </button>
        <button className="border bg-red-300 p-5 ml-5" onClick={decrementValue}>
          decrement state value
        </button>
      </div>
    </>
  );
}
