const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require("./routes/itemRoutes");
app.use("/api", itemRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
