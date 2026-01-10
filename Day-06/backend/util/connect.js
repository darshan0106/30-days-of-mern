const mongoose = require("mongoose");

const dbURL = "mongodb://0.0.0.0:27017/bookDB";

const connectDB = () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("Connected to Database successfully");
    })
    .catch((err) => {
      console.log("Error connecting to Database:", err);
    });
};

module.exports = connectDB;
