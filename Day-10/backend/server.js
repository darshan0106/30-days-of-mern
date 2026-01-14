require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { login } = require("./controllers/authController");

const app = express();
app.use(express.json());

app.post("/login", login);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
