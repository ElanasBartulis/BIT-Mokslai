import { useState } from "react";

export default function Component7() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [list, setList] = useState([]);
  const storedList = localStorage.getItem("kittyList");
  const parsedList = storedList ? JSON.parse(storedList) : [];

  function getName(e) {
    const value = e.target.value;
    setName(value);
  }
  function getWeight(e) {
    const value = Number(e.target.value);
    setWeight(value);
  }

  function handleForm(e) {
    e.preventDefault();
    const nameAndWeight = { name, weight };
    setList((prevList) => {
      const updatedList = [...prevList, nameAndWeight];
      localStorage.setItem("kittyList", JSON.stringify(updatedList));
      return updatedList;
    });
    console.log(list);
    setName("");
    setWeight(0);
  }

  return (
    <>
      <div>
        <h2>
          Total Weight:{" "}
          {parsedList.reduce((total, item) => total + item.weight, 0)}
        </h2>
        {parsedList
          .sort((a, b) => b.weight - a.weight)
          .map((item, index) => {
            return (
              <ul className="m-4" key={index}>
                <li>
                  <b>Name:</b> {item.name}
                </li>
                <li>
                  <b>Weight:</b> {item.weight}
                </li>
              </ul>
            );
          })}
      </div>

      <form action="#" className="m-4" onSubmit={handleForm}>
        <div>
          <input
            className="border rounded-sm"
            type="text"
            value={name}
            onChange={getName}
            placeholder=" Vardas"
          />
        </div>

        <div>
          <input
            className="border rounded-sm"
            type="number"
            value={weight}
            onChange={getWeight}
            placeholder=" Svoris"
          />
        </div>

        <button
          type="submit"
          className="py-1 px-2 mt-2 text-white bg-blue-500 rounded-sm active:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </>
  );
}
