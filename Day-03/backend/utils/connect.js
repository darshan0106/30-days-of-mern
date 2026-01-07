const mongoose = require("mongoose");

const dbURI = "mongodb://0.0.0.0/bookDB";

const connectDB = () => {
  mongoose
    .connect(dbURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};

module.exports = connectDB;
