const dbPool = require("../config/db");

const create = (todo) => {
  return new Promise((resolve, reject) => {
    dbPool.query("INSERT INTO todos SET ?", todo, (error, results, fields) => {
      if (error) {
        return reject(error);
      }
      resolve({ id: results.insertId, ...todo });
    });
    // console.log(todo);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    dbPool.query(
      "SELECT * FROM todos WHERE todoid = ?",
      id,
      (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        if (results.length === 0) {
          return resolve(null);
        }
        resolve(results[0]);
      }
    );
  });
};

const getAllTodos = (userid) => {
  return new Promise((resolve, reject) => {
    dbPool.query(
      "SELECT * FROM todos WHERE userid = ?",
      userid,
      (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        if (results.length === 0) {
          return resolve(null);
        }
        resolve(results);
      }
    );
  });
};

module.exports = { create, findById, getAllTodos };
