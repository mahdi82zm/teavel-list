import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]);

  function handleAdditems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼You have ${numItem} items on your list , and you already packed
        ${numPacked} (${precentage}%)`}
      </em>
    </footer>
  );
}
