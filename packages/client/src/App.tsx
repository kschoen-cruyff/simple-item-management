import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import useFetchItems from "./hooks/useFetchItems";
import { Item } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { loadItems, loading, error } = useFetchItems(setItems);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleItemAdded = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <>
      <div className="item-container">
        <h1>Item Manager</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
          <>
            <AddItemForm onItemAdded={handleItemAdded} />
            <ItemList items={items} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
