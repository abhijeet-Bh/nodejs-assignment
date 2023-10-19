const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const UserController = require("../controllers/userController");

const userController = new UserController();

router.use(bodyParser.json());
router.post("/login", async (req, res) => userController.logInUser(req, res));

router.use(bodyParser.json());
router.post("/signup", async (req, res) => userController.signupUser(req, res));

module.exports = router;
