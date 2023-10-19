const { v1: uuid } = require("uuid");
const Todo = require("../models/todoModel");
const {
  create,
  findById,
  getAllTodos,
  updateTodoItem,
  deleteTodo,
} = require("../repositories/todoRepository");

class TodoController {
  async createTodoItem(req, res) {
    const userid = req.user.id;
    const { title, description } = req.body;
    const newTodo = new Todo(uuid(), userid, title, description);

    const response = await create(newTodo);

    res.status(201).json(response);
  }

  async getTodoItem(req, res) {
    const userid = req.user.id;
    const { id } = req.params;
    const todoItem = await findById(id);
    if (todoItem) {
      if (todoItem.userid == userid) {
        res.status(200).json(todoItem);
      } else {
        res.status(400).json({ message: "UnAuthorised user!" });
      }
    } else {
      res.status(404).json({ message: "Todo Not Found!" });
    }
  }

  async updateTodoItem(req, res) {
    const userid = req.user.id;
    const { todoid } = req.params;
    const { title, description } = req.body;
    const todoItem = await findById(todoid);
    if (todoItem) {
    if (todoItem.userid == userid) {
      const newTodo = new Todo(todoid, userid, title, description);

      const response = await updateTodoItem(todoid, newTodo);

      res.status(201).json(response);
    } else {
      res.status(400).json({ message: "UnAuthorised user!" });
    }
    } else {
           res.status(404).json({ message: "Todo Not Found!" });
         }
  }

  async deleteTodoItem(req, res) {
    const { todoid } = req.params;
    const userid = req.user.id;
    const todoItem = await findById(todoid);

    if (todoItem.userid == userid) {
      const response = await deleteTodo(todoid);
      res.status(201).json(response);
    } else {
      res.status(400).json({ message: "UnAuthorised user!" });
    }
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
