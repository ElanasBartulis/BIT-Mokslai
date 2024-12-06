import { useState } from "react";

export default function Component10() {
  const [square, setSquare] = useState({
    width: "",
    height: "",
    backgroundColor: "",
  });
  const [listOfSquares, setListOfSquares] = useState([]);

  function plotisRangeChange(e) {
    const width = Number(e.target.value);
    setSquare((prev) => ({ ...prev, width }));
  }

  function aukstisRangeChange(e) {
    const height = Number(e.target.value);
    setSquare((prev) => ({ ...prev, height }));
  }

  function colorChange(e) {
    const backgroundColor = e.target.value;
    setSquare((prev) => ({ ...prev, backgroundColor }));
  }

  function makeSquare() {
    setSquare({
      width: 100,
      height: 100,
      backgroundColor: "#000000",
    });
  }

  function saveSquare() {
    setListOfSquares((prev) => [...prev, { ...square }]);
    setSquare({
      width: 0,
      height: 0,
      backgroundColor: "",
    });
  }

  return (
    <>
      <div className="flex flex-col gap-1 m-4">
        <div
          style={{
            width: `${square.width}px`,
            height: `${square.height}px`,
            backgroundColor: square.backgroundColor,
          }}
        ></div>

        <div className="flex flex-row flex-wrap gap-4">
          {listOfSquares.map((style, index) => (
            <div
              key={index}
              style={{
                width: `${style.width}px`,
                height: `${style.height}px`,
                backgroundColor: style.backgroundColor,
              }}
            ></div>
          ))}
        </div>

        <div>
          <label>
            Plotis:
            <input
              type="range"
              min="10"
              max="200"
              value={square.width}
              onChange={plotisRangeChange}
            />
          </label>
        </div>
        <div>
          <label>
            Aukštis:
            <input
              type="range"
              min="10"
              max="200"
              value={square.height}
              onChange={aukstisRangeChange}
            />
          </label>
        </div>
        <div>
          <label>
            Spalva:
            <input
              type="color"
              value={square.backgroundColor}
              onChange={colorChange}
            />
          </label>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 border px-4 py-1 rounded-sm text-white w-24"
          onClick={makeSquare}
        >
          Sukurti
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 border px-4 py-1 rounded-sm text-white w-24"
          onClick={saveSquare}
        >
          Išsaugoti
        </button>
      </div>
    </>
  );
}
