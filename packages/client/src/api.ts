import { Item } from "./types";

const API_URL = "http://localhost:5000/api/items";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return await response.json();
};

export const addItem = async (name: string): Promise<Item> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to add item");
  }

  return response.json();
};
