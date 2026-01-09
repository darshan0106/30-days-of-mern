const express = require("express");
const connectDB = require("./utils/connect");
const bookRouter = require("./router/book.router");

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
