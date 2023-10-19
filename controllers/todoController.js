const { v1: uuid } = require("uuid");
const Todo = require("../models/todoModel");
const {
  create,
  findById,
  getAllTodos,
} = require("../repositories/todoRepository");

class TodoController {
  async createTodoItem(req, res) {
    const userid = req.user.id;
    const { title, description } = req.body;
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
    const userid = req.user.id;
    const todos = await getAllTodos(userid);
    if (todos) {
      res.json(200, todos);
    } else {
      res.json(404, { message: "No todos found!" });
    }
  }
}

module.exports = TodoController;
