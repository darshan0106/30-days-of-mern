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
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  publishedYear: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
  },
  description: {
    type: String,
    maxlength: 500,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
