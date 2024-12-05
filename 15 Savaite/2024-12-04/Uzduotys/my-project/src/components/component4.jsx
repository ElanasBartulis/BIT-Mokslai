import { useState } from "react";

export default function Component9() {
  const [textDisplay, setTextDispay] = useState("");
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [font, setFont] = useState("");

  function setValueToDisplay(e) {
    setTextDispay(e.target.value);
  }

  function selectColor(e) {
    setColor(e.target.value);
    console.log(color);
  }
  function selectFontSize(e) {
    setFontSize(e.target.value);
    console.log(fontSize);
  }
  function selectFont(e) {
    setFont(e.target.value);
    console.log(font);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center m-10  gap-2">
          <input type="text" className="border" onChange={setValueToDisplay} />
          <select className="border" onChange={selectColor}>
            <option value="" selected>
              -- Select a color --
            </option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Violet">Violet</option>
            <option value="Orange">Orange</option>
          </select>
          <select className="border" onChange={selectFontSize}>
            <option value="" selected>
              -- Select a Font-Size --
            </option>
            <option value="3rem">5xl</option>
            <option value="2.25rem">4xl</option>
            <option value="1.875rem">3xl</option>
            <option value="1.5rem">2xl</option>
            <option value="1.25rem">xl</option>
          </select>
          <select className="border" onChange={selectFont}>
            <option value="" selected>
              -- Select a Font --
            </option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
          </select>
        </div>
        <div
          className="flex justify-center"
          style={{ color: color, fontSize: fontSize, fontFamily: font }}
        >
          {textDisplay}
        </div>
      </div>
    </>
  );
}
