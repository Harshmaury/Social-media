const express = require("express");
const { getUser } = require("../controllers/userController");
const router = express.Router();

router.get("/:id", getUser);

router.get("/", (req, res) => {
  res.send("Hello, API!");
});

module.exports = router;
