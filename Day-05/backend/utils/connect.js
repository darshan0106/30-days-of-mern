const mongoose = require("mongoose");

const dbURL = "mongodb://0.0.0.0:27017/bookDB";

const connectDB = () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connectDB;
