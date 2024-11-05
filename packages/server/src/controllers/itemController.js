const mockData = require("../data/mockData");

let items = mockData;

const getItems = (req, res) => {
  res.json(items);
};

const addItem = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Item name is required." });
  }

  const newItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
    name,
  };

  items.push(newItem);
  res.status(201).json(newItem);
};

const notFound = (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
};

module.exports = {
  getItems,
  addItem,
  notFound,
};
