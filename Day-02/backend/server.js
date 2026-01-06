const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/data", (req, res) => {
  res.json({ message: "Data received!" });
});

app.put("/update", (req, res) => {
  res.json({ message: "Update successful!" });
});

app.delete("/delete", (req, res) => {
  res.json({ message: "Delete successful!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
