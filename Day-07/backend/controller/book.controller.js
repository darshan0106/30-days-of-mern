const Book = require("../model/Book");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.createbook = catchAsync(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});

exports.getAllBooks = catchAsync(async (req, res) => {
  const filter = req.query;
  const books = await Book.find(filter);
  res.status(200).json(books);
});

exports.getBookById = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(new AppError("Book not found", 404));
  }

  res.status(200).json(book);
});

exports.updateBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) {
    return next(new AppError("Book not found", 404));
  }

  res.status(200).json(book);
});

exports.deleteBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) {
    return next(new AppError("Book not found", 404));
  }

  res.status(200).json({ message: "Book deleted successfully" });
});
