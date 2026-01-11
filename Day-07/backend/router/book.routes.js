const express = require("express");
const bookController = require("../controller/book.controller");
const isValidBook = require("../middleware/isValidBook");

const bookRouter = express.Router();

bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.post("/", isValidBook, bookController.createbook);
bookRouter.put("/:id", isValidBook, bookController.updateBook);
bookRouter.delete("/:id", bookController.deleteBook);

module.exports = bookRouter;
