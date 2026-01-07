const express = require("express");
const connectDB = require("./utils/connect");
const Book = require("./models/Book");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.post("/create", async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create book" });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
