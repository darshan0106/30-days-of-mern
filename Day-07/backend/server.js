const express = require("express");
const connectDB = require("./utils/connect");
const bookRoutes = require("./router/book.routes");
const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/AppError");

const app = express();

connectDB();
app.use(express.json());

app.use("/books", bookRoutes);

app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use(errorHandler);
