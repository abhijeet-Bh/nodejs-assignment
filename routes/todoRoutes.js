const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const TodoController = require("../controllers/todoController");

//todo routes goes here.
const todoController = new TodoController();

router.get("/", (req, res) => todoController.getAllTodos(req, res));
router.get("/:id", (req, res) => todoController.getTodoItem(req, res));

router.use(bodyParser.json());
router.post("/", async (req, res) => todoController.createTodoItem(req, res));

module.exports = router;
