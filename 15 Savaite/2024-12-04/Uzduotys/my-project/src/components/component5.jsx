import { useState } from "react";

export default function Component10() {
  const [square, setSquare] = useState([]);
  const [plotisRange, setPlotisRange] = useState(100);
  const [aukstisRange, setAukstisRange] = useState(100);
  const [color, setColor] = useState("#000000");

  function plotisRangeChange(e) {
    setPlotisRange(e.target.value);
  }
  function aukstisRangeChange(e) {
    setAukstisRange(e.target.value);
  }
  function colorChange(e) {
    setColor(e.target.value);
  }
  console.log(color);

  function makeSquare() {
    const defaultSquare = {
      width: `${plotisRange}px`,
      height: `${aukstisRange}px`,
      backgroundColor: color,
    };
    setSquare([...square, defaultSquare]);
  }

  //   function editPlotis(e) {
  //     const pixels = `${e.target.value}px`;
  //     setSquare((prevSquare) => {
  //       const copyOfPrevious = [...prevSquare];
  //       const lastElement = copyOfPrevious.length - 1;

  //       if (copyOfPrevious.length > 0) {
  //         copyOfPrevious[lastElement] = {
  //           ...copyOfPrevious[lastElement],
  //           width: pixels,
  //         };
  //       }
  //       return copyOfPrevious;
  //     });
  //   }

  return (
    <>
      <div className="flex flex-col gap-1 m-4">
        <div className="flex flex-row flex-wrap gap-4">
          {square.map((style, index) => (
            <div key={index} style={style}></div>
          ))}
        </div>
        <div>
          <label>
            <input
              type="range"
              min="10"
              max="200"
              value={plotisRange}
              onChange={plotisRangeChange}
            />
            Plotis
          </label>
        </div>

        <div>
          <label>
            <input
              type="range"
              min="10"
              max="200"
              value={aukstisRange}
              onChange={aukstisRangeChange}
            />
            Aukstis
          </label>
        </div>

        <div>
          <label>
            <input type="color" value={colorChange} />
            Color
          </label>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 border px-4 py-1 rounded-sm text-white w-24"
          onClick={makeSquare}
        >
          Sukurti
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 border px-4 py-1 rounded-sm text-white w-24">
          Išsaugoti
        </button>
      </div>
    </>
  );
}
