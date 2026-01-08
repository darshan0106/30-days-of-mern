const express = require("express");
const connectDB = require("./utils/connect");
const Book = require("./models/Book");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Book API");
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/create", async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = new Book({ title, author });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
