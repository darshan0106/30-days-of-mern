const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  author: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  publishedYear: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
