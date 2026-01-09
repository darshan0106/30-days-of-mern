const express = require("express");
const validator = require("../validators/book.validator");
const bookController = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks);

bookRouter.post("/", (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  bookController.createBook(req, res);
});

bookRouter.get("/:id", bookController.getBookById);

bookRouter.put("/:id", (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  bookController.updateBook(req, res);
});

bookRouter.delete("/:id", bookController.deleteBook);

module.exports = bookRouter;
