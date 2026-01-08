const mongoose = require("mongoose");

const MONGO_URI = "mongodb://0.0.0.0:27017/bookDB";

const connectDB = async () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};
module.exports = connectDB;
