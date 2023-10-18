const { v1: uuid } = require("uuid");
const Todo = require("../models/todoModel");
const {
  create,
  findById,
  getAllTodos,
} = require("../repositories/todoRepository");

class TodoController {
  async createTodoItem(req, res) {
    const { userid, title, description } = req.body;
    const newTodo = new Todo(uuid(), userid, title, description);

    const response = await create(newTodo);

    res.status(201).json({ message: response });
  }

  async getTodoItem(req, res) {
    const { id } = req.params;
    const todoItem = await findById(id);
    res.status(200).json(todoItem);
  }

  async getAllTodos(req, res) {
    const todos = await getAllTodos();
    res.json(todos);
  }
}

module.exports = TodoController;
