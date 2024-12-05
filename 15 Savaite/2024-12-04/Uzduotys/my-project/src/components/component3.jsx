import { useState } from "react";

export default function Component8() {
  const [item1, setItem1] = useState(100);
  const [item2, setItem2] = useState(50);

  function getValue1(e) {
    setItem1(e.target.value);
    setItem2(e.target.value / 2);
  }

  function getValue2(e) {
    setItem2(e.target.value);
    setItem1(e.target.value * 2);
  }

  return (
    <>
      <div className="container mx-auto flex flex-col w-96 m-10 gap-2">
        <label>
          <h2>Item 1: </h2>
          <input
            className="border"
            type="text"
            value={item1}
            onChange={getValue1}
          />
        </label>
        <label>
          <h2>Item 2: </h2>
          <input
            className="border"
            type="text"
            value={item2}
            onChange={getValue2}
          />
        </label>
      </div>
    </>
  );
}
