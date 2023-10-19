const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const { authenticateToken } = require("../config/authenticateMiddleware");

const TodoController = require("../controllers/todoController");

//todo routes goes here.
const todoController = new TodoController();

router.get("/", authenticateToken, (req, res) =>
  todoController.getAllTodos(req, res)
);
router.get("/:id", (req, res) => todoController.getTodoItem(req, res));

router.use(bodyParser.json());
router.post("/", authenticateToken, async (req, res) =>
  todoController.createTodoItem(req, res)
);

module.exports = router;
