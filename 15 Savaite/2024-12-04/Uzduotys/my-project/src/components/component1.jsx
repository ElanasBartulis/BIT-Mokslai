import { useState } from "react";

export default function Component6() {
  const [number, setNumber] = useState(0);
  const [square, setSquare] = useState([]);

  function getNumber(e) {
    const value = Number(e.target.value);
    setNumber(value);
  }

  function makeSquare() {
    const sqrContainer = [];
    for (let i = 0; i < number; i++) {
      sqrContainer.push(
        <div
          key={i}
          className="bg-red-500 w-14 h-14 m-4 flex justify-center items-center"
        >
          {Math.floor(Math.random() * (200 - 100) + 100) + 1}
        </div>
      );
    }
    setSquare([...square, sqrContainer]);
    console.log(square);
  }

  return (
    <div>
      <div className="flex flex-wrap">{square}</div>
      <input
        className="border"
        type="number"
        placeholder=" Number"
        onChange={getNumber}
      />
      <div>
        <button
          className="bg-blue-500 text-white py-1 px-2"
          onClick={makeSquare}
        >
          Send
        </button>
      </div>
    </div>
  );
}
