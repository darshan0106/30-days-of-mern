const express = require("express");
const connectDB = require("./util/connect");
const bookRoutes = require("./route/bookRoutes");

const app = express();

connectDB();
app.use(express.json());

app.use("/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
