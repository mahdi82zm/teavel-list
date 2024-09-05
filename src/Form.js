import { useState } from "react";
export default function Form({ onAdditems }) {
  const [description, setDescribtion] = useState("TEST");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);
    onAdditems(newItem);
    setDescribtion("");

    setSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={select}
        onChange={(e) => {
          console.log(e.target.value);
          setSelect(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescribtion(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
