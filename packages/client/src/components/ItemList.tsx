import React from "react";
import { Item } from "../types";

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <div className="item-list">
        {items.length === 0 ? (
          <p className="empty-message">
            No items to display. Add a new item to get started!
          </p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item-card">
              <span className="item-name">{item.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
