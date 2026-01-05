const express = require("express");
const quotes = require("./data");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
