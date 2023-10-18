const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { v1: uuid } = require("uuid");

const pool = require("../config/db");

router.use(bodyParser.json());
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    await createUser(username, password);
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

module.exports = router;
