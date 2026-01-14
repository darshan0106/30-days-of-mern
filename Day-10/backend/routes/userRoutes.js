const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.get("/profile", verifyJWT, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
