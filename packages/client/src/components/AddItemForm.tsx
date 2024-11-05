import React, { useState, FormEvent } from "react";
import { addItem } from "../api";
import { Item } from "../types";

interface AddItemFormProps {
  onItemAdded: (newItem: Item) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onItemAdded }) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Item name is required.");
      return;
    }

    try {
      const newItem = await addItem(name);
      onItemAdded(newItem);
      setName("");
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddItemForm;
