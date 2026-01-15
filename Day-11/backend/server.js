const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});