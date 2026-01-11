const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose invalid ObjectId
  if (err.name === "CastError") {
    error = new AppError("Invalid ID format", 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    error = new AppError(messages.join(", "), 400);
  }

  res.status(error.statusCode || 500).json({
    status: error.status || "error",
    message: error.message || "Something went wrong",
  });
};

module.exports = errorHandler;
